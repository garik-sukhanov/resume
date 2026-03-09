"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Index.hero");
  const words = t.raw("dynamic") as string[];
  const staticWord = t("static");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="py-20 flex flex-col items-center justify-center text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1f2328] dark:text-[#f0f6fc]">
          <span className="block mb-2">{staticWord}</span>
          <div className="h-20 sm:h-24 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[#0969da] to-[#2ea043] dark:from-[#2f81f7] dark:to-[#3fb950]"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#636c76] dark:text-[#8b949e]">
          {useTranslations("Index")("description")}
        </p>
      </motion.div>
    </section>
  );
}
