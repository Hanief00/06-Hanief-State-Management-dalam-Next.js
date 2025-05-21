import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "State Management Praktikum",
  description: "Belajar State Management di Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-white text-black dark:bg-black dark:text-white`}
    >
      <body>
        <ThemeProvider>
          <main className="container mx-auto p-4">
            {children}
            <div className="mt-8 p-4 border-t">
              <ThemeToggle />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
