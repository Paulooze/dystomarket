import type { Metadata } from "next";
import { Oxanium, IBM_Plex_Mono, VT323 } from "next/font/google"; // Import ibm-plex_Mono
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./providers";

const inter = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const imbPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "600", "700"],
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Dystomarket – The Ultimate Fictional Stock Trading Platform",
  description:
    "Step into the dystopian stock market of tomorrow. Trade shares of fictional corporations from movies, games, and TV—complete with real-time price updates, financial reports, and market chaos. Will your portfolio survive the corporate wars?",
  openGraph: {
    title: "Dystomarket – Trade Fictional Stocks in a Cyberpunk Economy",
    description:
      "A high-stakes trading simulation where legendary corporations from pop culture clash in an unpredictable stock market. Track trends, analyze financials, and survive the capitalist wasteland.",
    url: "https://dystomarket.paulooze.com/",
  },
  keywords:
    "fictional stock market, cyberpunk stocks, stock market simulator, trade fictional companies, dystopian finance, corporate wars, stock trading game, parody stock market, sci-fi economy, stock exchange simulator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${imbPlex.variable} ${vt323.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="flex-grow pt-10">{children}</main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
