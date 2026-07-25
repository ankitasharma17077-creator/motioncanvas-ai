"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[180px] opacity-30"
      />

      <motion.div
        animate={{
          x: [0, -250, 200, 0],
          y: [0, 150, -120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[180px] opacity-30"
      />
    </>
  );
}