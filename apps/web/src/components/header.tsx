'use client';
import { ChartCandlestick } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-card shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-100 flex items-center">
            <ChartCandlestick />
            <span className="ml-2">Dystomarket</span>
          </h1>
        </Link>
        <nav className="flex items-center ml-10">
          <Link
            href="/"
            className="ml-6 text-gray-100 hover:text-dysto-white transition-colors duration-200 ease-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="ml-6 text-gray-100 hover:text-dysto-white transition-colors duration-200 ease-out"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
