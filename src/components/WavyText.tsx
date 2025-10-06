"use client";

import React from "react";
import { motion } from "framer-motion";

type WavyTextProps = {
  text: string;
  amplitude?: number;   // jarak naik turun
  duration?: number;    // durasi satu siklus
  delayStep?: number;   // delay antar huruf
  className?: string;
};

export default function WavyText({
  text,
  amplitude = 8,
  duration = 1.5,
  delayStep = 0.06,
  className = "",
}: WavyTextProps) {
  return (
    <h2 className={`text-3xl font-bold mb-12 flex justify-center ${className}`}>
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 0 }} // bantu hindari mismatch server/client
          animate={{ y: [0, -amplitude, 0] }}
          transition={{
            repeat: Infinity,
            duration,
            delay: i * delayStep,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}
