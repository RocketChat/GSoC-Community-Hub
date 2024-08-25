import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className="">
      <body>
            {children}
      </body>
    </html>
  );
}
