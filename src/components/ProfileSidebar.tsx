"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Download,
  Mail,
  Github,
  MapPin,
  Phone,
  NotebookIcon,
  Send,
} from "lucide-react";
import Image from "next/image";

export function ProfileSidebar() {
  const t = useTranslations("Index");

  const locale = useLocale();

  const pdfUrl =
    locale === "ru"
      ? "/FullStack dev RU Sukhanov.pdf"
      : "/FullStack dev EN Sukhanov.pdf";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-card-border overflow-hidden bg-card shadow-sm transition-colors duration-300">
        <div className="relative aspect-square w-full">
          <Image
            src="/sukhanov-photo.jpeg"
            alt={t("personalInfo.name")}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-foreground transition-colors duration-300">
              {t("personalInfo.name")}
            </h2>
            <p className="text-secondary font-medium transition-colors duration-300">
              {t("personalInfo.prof")}
            </p>
          </div>

          <div className="h-px bg-border transition-colors duration-300" />

          <div className="space-y-3 text-sm text-foreground transition-colors duration-300">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>{t("contact.location")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary" />
              <a
                href={`mailto:${t("contact.email")}`}
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.email")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <a
                href={`tel:${t("contact.phone")}`}
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.phone")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-4 h-4 text-secondary" />
              <a
                href={`https://t.me/${t("contact.telegram").replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.telegram")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-secondary" />
              <a
                href={`https://${t("contact.github")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:underline transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="pt-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0969da] via-[#2ea043] to-[#0969da] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <a
              href={pdfUrl}
              download
              className="relative w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-card text-foreground border border-card-border rounded-lg text-sm font-bold transition-all hover:bg-transparent hover:text-white dark:hover:text-white"
            >
              <Download className="w-4 h-4" />
              {t("resume.download")}
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border border-card-border bg-card shadow-sm transition-colors duration-300">
        <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider transition-colors duration-300">
          {t("coverLetter.title")}
        </h3>
        <p className="text-sm text-foreground leading-relaxed italic transition-colors duration-300">
          &ldquo;{t("coverLetter.content")}&rdquo;
        </p>
      </div>
    </div>
  );
}
