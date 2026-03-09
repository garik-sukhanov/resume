"use client";

import { useTranslations } from "next-intl";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export function Experience() {
  const t = useTranslations("Index.experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-[#1f2328] dark:text-[#f0f6fc]">
        <Briefcase className="w-5 h-5 text-[#0969da] dark:text-[#2f81f7]" />
        {t("title")}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-[#1f2328] dark:text-[#f0f6fc]">
                  {item.role}
                </h3>
                <p className="text-md text-[#636c76] dark:text-[#8b949e]">
                  {item.company}
                </p>
              </div>
              <span className="text-sm text-[#636c76] dark:text-[#8b949e] whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="mt-4 text-sm text-[#24292f] dark:text-[#c9d1d9]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
