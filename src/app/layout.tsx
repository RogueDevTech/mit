import type { Metadata } from "next";
import "../styles/global.css";
export const metadata: Metadata = {
  title: "Men in Tech",
  description:
    "We are a global nonprofit organiation dedicated to supporting, empowering, and advancing men in technology ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
