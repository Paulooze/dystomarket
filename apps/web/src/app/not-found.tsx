'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex items-start">
        <div>
          <motion.div
            className="relative w-48 h-48"
            animate={{
              opacity: [1, 0.7, 1],
              x: [-2, 2, -2, 2, 0],
              y: [-1, 1, -1, 1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Image
              src="/images/404.webp"
              alt="404 not found"
              width={600}
              height={600}
            />
          </motion.div>
        </div>
        <div className="flex-1 pl-8">
          <h2 className="text-4xl font-semibold mb-4 font-display  text-dysto-white">
            MARKET ERROR 404: ASSET NOT FOUND
          </h2>
          <h3 className="text-3xl font-semibold mb-4 font-display  dark:text-dysto-purple">
            This corporation has been delisted.
          </h3>
          <h4>Possible Causes:</h4>
          <ul className="list-disc ml-8 mb-4">
            <li>
              The page was seized by a <strong>hostile takeover</strong>.
            </li>
            <li>
              Corporate sabotage led to its <strong>liquidation</strong>.
            </li>
            <li>
              Your access was <strong>revoked</strong> by the megacorp
              overlords.
            </li>
            <li>
              The AI running this market just had a{' '}
              <strong>glitchy episode</strong>.
            </li>
          </ul>
          <h3 className="text-3xl font-semibold mb-4 font-display  dark:text-dysto-purple">
            What now?
          </h3>
          <div className="flex space-x-1">
            <Link
              href="/"
              className="inline-flex px-4 py-2 bg-dysto-green text-dysto-dark rounded-md hover:bg-aquamarine-600 transition-colors duration-300"
            >
              Return to the Trading Floor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
