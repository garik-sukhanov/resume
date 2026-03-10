"use client";

import { useTranslations, useLocale } from "next-intl";
import { Download, Mail, Github, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";

export function ProfileSidebar() {
  const t = useTranslations("Index");

  const locale = useLocale();

  const pdfUrl =
    locale === "ru"
      ? "/FullStack dev RU Sukhanov.pdf"
      : "/FullStack dev EN Sukhanov.pdf";

  return (
    <div className="space-y-6 max-w-[400px] mx-auto md:max-w-none">
      <div className="rounded-xl border border-card-border overflow-hidden bg-card shadow-sm transition-colors duration-300">
        <div className="relative aspect-square w-full">
          <Image
            src="/sukhanov-photo.jpeg"
            alt={t("personalInfo.name")}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
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

          <div className="pt-4">
            <div className="relative p-[1.5px] rounded-lg bg-gradient-to-r from-[#0969da] via-[#2ea043] to-[#0969da] animate-gradient-x transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-none">
              <a
                href={pdfUrl}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-background text-foreground rounded-[7px] text-sm font-bold transition-all hover:bg-card"
              >
                <Download className="w-4 h-4 text-accent" />
                {t("resume.download")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
