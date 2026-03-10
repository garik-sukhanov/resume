"use client";

import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Sun, Moon, Github, Mail, Globe, Briefcase } from "lucide-react";
import { useSyncExternalStore, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const emptySubscribe = () => () => {};

export function Header() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");
  const t_index = useTranslations("Index");

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ru" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  if (!isClient)
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background h-16" />
    );

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <Link
          href={`/${locale}`}
          className="group font-bold text-xl flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white dark:text-[#0d1117] transition-colors duration-300">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline tracking-tight font-extrabold transition-colors duration-300">
            Sukhanov.dev
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 mr-auto ml-12">
          <a
            href="#projects"
            className="text-sm font-medium text-secondary hover:text-accent transition-colors"
          >
            {t("projects")}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-lg border border-border hover:bg-card transition-all flex items-center gap-2 text-foreground shadow-sm active:scale-95 cursor-pointer"
            aria-label={t("language")}
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {locale}
            </span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-border hover:bg-card transition-all text-foreground shadow-sm active:scale-95 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <div className="h-8 w-px bg-border mx-1 hidden xs:block" />

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={t_index("contact.github.link")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-card transition-all text-foreground active:scale-95"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={t_index("contact.email.link")}
              className="p-2 rounded-lg hover:bg-card transition-all text-foreground active:scale-95"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
