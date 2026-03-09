"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Download,
  Mail,
  Github,
  MapPin,
  Phone,
  NotebookIcon,
} from "lucide-react";
import Image from "next/image";

export function ProfileSidebar() {
  const t = useTranslations("Index");
  const personalInfo = useTranslations("Index.personalInfo");

  const locale = useLocale();

  const pdfUrl =
    locale === "ru"
      ? "/FullStack dev RU Sukhanov.pdf"
      : "/FullStack dev EN Sukhanov.pdf";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[#d0d7de] dark:border-[#30363d] overflow-hidden bg-white dark:bg-[#0d1117] shadow-sm ring-1 ring-[#d0d7de] dark:ring-transparent">
        <div className="relative aspect-square w-full">
          <Image
            src="/sukhanov-photo.jpeg"
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#1f2328] dark:text-[#f0f6fc]">
              {personalInfo("name")}
            </h2>
            <p className="text-[#636c76] dark:text-[#8b949e] font-medium">
              {personalInfo("prof")}
            </p>
          </div>

          <div className="h-px bg-[#d0d7de] dark:bg-[#30363d]" />

          <div className="space-y-3 text-sm text-[#24292f] dark:text-[#c9d1d9]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
              <span>{t("contact.location")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
              <a
                href={`mailto:${t("contact.email")}`}
                className="hover:text-[#0969da] dark:hover:text-[#2f81f7] hover:underline transition-all"
              >
                {t("contact.email")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
              <a
                href={`tel:${t("contact.phone")}`}
                className="hover:text-[#0969da] dark:hover:text-[#2f81f7] hover:underline transition-all"
              >
                {t("contact.phone")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
              <a
                href={`https://${t("contact.github")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0969da] dark:hover:text-[#2f81f7] hover:underline transition-all"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <NotebookIcon className="w-4 h-4 text-[#636c76] dark:text-[#8b949e]" />
              <a
                href={`https://${t("contact.hh")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0969da] dark:hover:text-[#2f81f7] hover:underline transition-all"
              >
                HH.ru
              </a>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={pdfUrl}
              download
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0969da] hover:bg-[#0861c5] text-white dark:bg-[#21262d] dark:hover:bg-[#30363d] dark:text-[#f0f6fc] border border-transparent dark:border-[#30363d] rounded-lg text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              {t("resume.download")}
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] shadow-sm ring-1 ring-[#d0d7de] dark:ring-transparent">
        <h3 className="text-sm font-bold text-[#1f2328] dark:text-[#f0f6fc] mb-3 uppercase tracking-wider">
          {t("coverLetter.title")}
        </h3>
        <p className="text-sm text-[#24292f] dark:text-[#c9d1d9] leading-relaxed italic">
          `{t("coverLetter.content")}`
        </p>
      </div>
    </div>
  );
}
