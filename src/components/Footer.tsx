"use client";

import { useTranslations } from "next-intl";
import { Github, Twitter, hh } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] py-12 mt-20">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-[#636c76] dark:text-[#8b949e] text-sm">
          <span>
            &copy; {currentYear} Sukhanov. {t("rights")}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#636c76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#2f81f7] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://hh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#636c76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#2f81f7] transition-colors"
          >
            <hh className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#636c76] dark:text-[#8b949e] hover:text-[#0969da] dark:hover:text-[#2f81f7] transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
