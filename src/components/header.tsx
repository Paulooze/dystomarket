"use client";
import { ChartCandlestick } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-card shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
            <ChartCandlestick />
            <span className="ml-2">Dystomarket</span>
          </h1>
        </Link>
        <nav>
          <Link
            href="/"
            className="ml-6 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="ml-6 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
