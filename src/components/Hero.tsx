"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Index.hero");
  const words = t.raw("dynamic") as string[];
  const staticWord = t("static");
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, words, typingSpeed]);

  return (
    <section className="pb-8 pt-4 flex flex-col items-start text-left space-y-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 w-full"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex flex-wrap items-center gap-x-2 min-h-[4rem] sm:min-h-[3rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0969da] to-[#2ea043] dark:from-[#2f81f7] dark:to-[#3fb950] break-words">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-[1.8rem] sm:h-[2.2rem] bg-accent ml-1 align-middle transition-colors duration-300"
            />
          </span>
          <span className="text-foreground whitespace-nowrap transition-colors duration-300">
            {staticWord}
          </span>
        </h1>
        <p className="max-w-2xl text-md sm:text-lg text-secondary leading-relaxed transition-colors duration-300">
          {useTranslations("Index")("description")}
        </p>
      </motion.div>
    </section>
  );
}
