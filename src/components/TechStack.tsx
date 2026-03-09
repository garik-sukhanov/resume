"use client";

import { useTranslations } from "next-intl";
import { Code, Briefcase } from "lucide-react";

export function TechStack() {
  const t = useTranslations("Index.techStack");
  const categories = t.raw("categories") as { name: string; items: string[] }[];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-[#1f2328] dark:text-[#f0f6fc]">
        <Code className="w-5 h-5 text-[#0969da] dark:text-[#2f81f7]" />
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] shadow-sm space-y-3"
          >
            <h3 className="text-sm font-semibold text-[#636c76] dark:text-[#8b949e] uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs font-medium rounded-md bg-[#f6f8fa] dark:bg-[#21262d] text-[#1f2328] dark:text-[#f0f6fc] border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da] dark:hover:border-[#2f81f7] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
