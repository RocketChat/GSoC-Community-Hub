import "../src/styles/globals.css";
import "@palanikannan1437/rc4-ui/styles.css";
import "@palanikannan1437/rc4community-navbar/styles.css";
import NavigationMenuDemo from "./navbar/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="bg-zinc-900">
        <body>
          <header className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
              <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Tailblocks</span>
              </a>
              <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                <NavigationMenuDemo />
              </nav>
              <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>
          <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
              {children}
            </main>
          </div>
        </body>
      </html>
  );
}
