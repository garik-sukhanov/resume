"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Download,
  Mail,
  Github,
  MapPin,
  Phone,
  Send,
  GraduationCap,
  Award,
  Languages,
} from "lucide-react";
import Image from "next/image";

export function ProfileSidebar() {
  const t = useTranslations("Index");
  const tSidebar = useTranslations("Index.sidebar");

  const locale = useLocale();

  const pdfUrl =
    locale === "ru"
      ? "/FullStack dev RU Sukhanov.pdf"
      : "/FullStack dev EN Sukhanov.pdf";

  return (
    <div className="space-y-6 max-w-[500px] mx-auto md:max-w-none">
      <div className="rounded-xl border border-card-border overflow-hidden bg-card shadow-sm transition-colors duration-300">
        <div className="relative aspect-square w-full">
          <Image
            src="/sukhanov-photo-3.jpg"
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
                href={t("contact.email.link")}
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.email.nick")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <a
                href={t("contact.phone.link")}
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.phone.nick")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-4 h-4 text-secondary" />
              <a
                href={t("contact.telegram.link")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.telegram.nick")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-secondary" />
              <a
                href={t("contact.github.link")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:underline transition-all"
              >
                {t("contact.github.nick")}
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

      <div className="p-6 rounded-xl border border-card-border bg-card shadow-sm transition-colors duration-300 space-y-6">
        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            {tSidebar("education.title")}
          </h3>
          <div className="space-y-1">
            <p className="text-sm font-bold text-foreground">
              {tSidebar("education.university")}
            </p>
            <p className="text-xs text-secondary">
              {tSidebar("education.degree")}
            </p>
            <p className="text-xs text-secondary/60">
              {tSidebar("education.years")}
            </p>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Courses */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            {tSidebar("courses.title")}
          </h3>
          <div className="space-y-1">
            <p className="text-sm font-bold text-foreground">
              {tSidebar("courses.name")}
            </p>
            <p className="text-xs text-secondary">
              {tSidebar("courses.program")}
            </p>
            <p className="text-xs text-secondary/60">
              {tSidebar("courses.years")}
            </p>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Languages */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
            <Languages className="w-4 h-4 text-accent" />
            {tSidebar("languages.title")}
          </h3>
          <div className="space-y-2">
            {(
              tSidebar.raw("languages.items") as {
                name: string;
                level: string;
              }[]
            ).map((lang, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-secondary">{lang.name}</span>
                <span className="text-xs font-bold text-foreground px-2 py-0.5 rounded-md bg-background border border-border">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
