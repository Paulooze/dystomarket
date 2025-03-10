'use client';
import { Link } from '@tanstack/react-router';
import { ChartCandlestick, MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './sheet';

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
        <nav className="hidden lg:flex items-center ml-10">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
        </nav>
        <nav className="flex items-center ml-auto">
          <Link
            to="/register"
            className="inline-flex px-2 py-1 text-sm lg:text-base lg:px-4 lg:py-2 bg-dysto-green text-green-950 font-semibold hover:bg-green-200"
          >
            Join Dystomarket
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden ml-auto">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu on mobile
            </SheetDescription>
            <div className="grid gap-6 p-6">
              <Link to="/" className="header-link">
                Home
              </Link>
              <Link to="/about" className="header-link">
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
