import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next"
import { Client, Index, Match } from "faunadb";
import GoogleProvider from "next-auth/providers/google";
export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()

  return session?.user
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          idToken: account.id_token,
          accessToken: account.access_token,
          accessTokenExpires: (account.expires_at as number) * 1000,
          refreshToken: account.refresh_token,
          roleFromFauna: await getRole(user.email as string),
          user,
        };
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      session.idToken = token.idToken;
      session.userRole = token.roleFromFauna;
      return session;
    },
  },
};
export async function getRole(userEmail: string) {
  if (userEmail) {
      try {
          const dbs = await client
              .query(q.Get(Match(Index("user_by_email"), userEmail)))
              .then((ret) => {
                  return ret ? ret : { data: null };
              })
              .catch((err) =>
                  console.error(
                      "Error: [%s] %s: %s",
                      err.name,
                      err.message,
                      err.errors()[0].description
                  )
              );
          return dbs.data.role;
      } catch (e) {
          console.error(e);
      }
  }
};
async function refreshAccessToken(token) {
  try {
      const url =
          "https://oauth2.googleapis.com/token?" +
          new URLSearchParams({
              client_id: process.env.GOOGLE_CLIENT_ID as string,
              client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
              grant_type: "refresh_token",
              refresh_token: token.refreshToken,
          });

      const response = await fetch(url, {
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
      });

      const refreshedTokens = await response.json();

      if (!response.ok) {
          throw refreshedTokens;
      }

      return {
          ...token,
          idToken: refreshedTokens.id_token,
          accessToken: refreshedTokens.access_token,
          accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
          refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      };
  } catch (error) {
      console.log(error);

      return {
          ...token,
          error: "RefreshAccessTokenError",
      };
  }
}
