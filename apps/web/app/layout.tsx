import "../src/styles/globals.css";
import "@palanikannan1437/rc4-ui/styles.css";
import "@palanikannan1437/rc4community-navbar/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
