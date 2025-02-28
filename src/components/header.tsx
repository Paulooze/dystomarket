"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Dystomarket
          </h1>
        </Link>
        {/* Add navigation links here, if needed */}
        {/* <nav>
                    <Link href="/about" className="ml-6 text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
                </nav> */}
      </div>
    </header>
  );
};

export default Header;
