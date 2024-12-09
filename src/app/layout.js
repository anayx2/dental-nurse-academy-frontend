import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Arial:wght@400&display=swap"
        rel="stylesheet"
      />
      <body>{children}</body>
    </html>
  );
}