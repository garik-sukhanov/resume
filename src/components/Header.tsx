"use client";

import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Sun, Moon, Github, Mail, Globe, Briefcase } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

const emptySubscribe = () => () => {};

export function Header() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ru" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  if (!isClient)
    return (
      <header className="sticky top-0 z-50 w-full border-b border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] h-16" />
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d0d7de] dark:border-[#30363d] bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <Link
          href={`/${locale}`}
          className="font-bold text-xl flex items-center gap-2 text-[#1f2328] dark:text-[#f0f6fc] hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-[#0969da] dark:bg-[#2f81f7] rounded-lg flex items-center justify-center text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline tracking-tight font-extrabold">
            Sukhanov.dev
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-lg border border-[#d0d7de] dark:border-[#30363d] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-all flex items-center gap-2 text-[#24292f] dark:text-[#c9d1d9] shadow-sm active:scale-95"
            aria-label={t("language")}
          >
            <Globe className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {locale}
            </span>
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-[#d0d7de] dark:border-[#30363d] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-all text-[#24292f] dark:text-[#c9d1d9] shadow-sm active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <div className="h-8 w-px bg-[#d0d7de] dark:bg-[#30363d] mx-1 hidden xs:block" />

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="https://github.com/garik-sukhanov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-all text-[#24292f] dark:text-[#c9d1d9] active:scale-95"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:igoreksuhanov@gmail.com"
              className="p-2 rounded-lg hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-all text-[#24292f] dark:text-[#c9d1d9] active:scale-95"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
