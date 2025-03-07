'use client';
import { Link } from '@tanstack/react-router';
import { ChartCandlestick } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Link to="/">
          <h1 className="text-xl font-bold text-gray-100 flex items-center">
            <ChartCandlestick />
            <span className="ml-2">Dystomarket</span>
          </h1>
        </Link>
        <nav className="flex items-center ml-10">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
