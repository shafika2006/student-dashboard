import "./globals.css";

export const metadata = {
  title: "Aether Student Terminal",
  description: "Premium animated bento layout platform matrix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}