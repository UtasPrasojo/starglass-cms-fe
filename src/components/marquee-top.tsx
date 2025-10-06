"use client";

import { motion } from "framer-motion";

export function MarqueeTop() {
  return (
    <div className="w-full overflow-hidden bg-green-900 text-white py-4">
      <motion.div
        className="whitespace-nowrap flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15, // makin kecil makin cepat
          ease: "linear",
        }}
      >
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
        <span className="mx-8">Welcome to Starglass</span>
      </motion.div>
    </div>
  );
}
