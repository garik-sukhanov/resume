"use client";

import { useTranslations } from "next-intl";
import { Github, Send } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const t_index = useTranslations("Index");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-secondary text-sm transition-colors duration-300">
          <span>
            &copy; {currentYear} {t_index("personalInfo.name")}. {t("rights")}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`https://${t_index("contact.github")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`https://t.me/${t_index("contact.telegram")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
