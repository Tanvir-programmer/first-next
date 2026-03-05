import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev-Story",
  description: "An app showing developer story around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b-2 border-gray-500 py-4 ">
          <h2 className="font-bold">🚆This is the Dev story</h2>
        </header>
       <div className="px-4 py-8"> {children}</div>
      </body>
    </html>
  );
}
