"use client";

import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">

      <BackgroundGlow />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold text-white"
        >
          MotionCanvas AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-2xl mt-5"
        >
          Paint the air with your hands.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-violet-600 rounded-full text-white"
        >
          Start Creating
        </motion.button>
      </div>

    </section>
  );
}