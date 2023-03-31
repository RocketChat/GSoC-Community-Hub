"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function AuthContext({ children }, session: Session | null) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}