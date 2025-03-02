import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Import Roboto_Mono
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Dystomarket - Fictional Stock Dashboard",
  description:
    "Track the performance of fictional companies from dystopian worlds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow pt-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
