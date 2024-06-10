import "./globals.css";
// import "@palanikannan1437/rc4-ui/styles.css";
// import "@palanikannan1437/rc4community-timeline/styles.css";
// import "@palanikannan1437/rc4community-navbar/styles.css";
// import NavigationMenuDemo from "./navbar/nav";
// import { getSession } from "../lib/session";

// import { fetchNavData } from "@palanikannan1437/rc4community-navbar-demo/core";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSession();

  // const navData = await fetchNavData({ cache: "no-store" });
  // const navItems = navData
  //   ? [
  //       { show: true, item: navData.variant1.data[0] },
  //       { show: true, item: navData.variant2.data[0] },
  //     ]
  //   : [];

  return (
    <html className="ui-dark dark bg-zinc-900">
      <body>
        {/* <NavigationMenuDemo
          session={session}
          navData={navData}
          navItems={navItems}
        /> */}
        {/* <div className="flex min-h-screen items-center justify-center py-2"> */}
            {children}
        {/* </div> */}
      </body>
    </html>
  );
}
