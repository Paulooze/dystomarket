import { motion } from "motion/react";
import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
      {/* Glitching Logo */}
      <motion.div
        className="relative w-24 h-24"
        animate={{
          opacity: [1, 0.7, 1],
          x: [-2, 2, -2, 2, 0],
          y: [-1, 1, -1, 1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src="/images/distorted_logo.webp" // Replace with a real glitchy-looking image
          alt="Glitching Logo"
          width="500"
          height="500"
          className="filter contrast-200"
        />
      </motion.div>

      {/* Warning Message */}
      <motion.h2
        className="mt-4 text-4xl font-semibold text-dysto-purple uppercase font-display"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        No Corporations Found
      </motion.h2>

      <motion.p
        className="mt-2 max-w-sm text-gray-500 dark:text-gray-50 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sector profits have fallen below acceptable thresholds. Corporate
        restructuring in progress.
      </motion.p>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('/images/ui/scanlines.png')] opacity-20 mix-blend-overlay"></div>
      </div>
    </div>
  );
}
