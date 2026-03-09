"use client";

import { useTranslations } from "next-intl";
import { Code } from "lucide-react";

export function TechStack() {
  const t = useTranslations("Index.techStack");
  const categories = t.raw("categories") as { name: string; items: string[] }[];

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-foreground transition-colors duration-300">
        <Code className="w-5 h-5 text-accent" />
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-card-border bg-card shadow-sm space-y-3 transition-colors duration-300"
          >
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs font-medium rounded-md bg-background text-foreground border border-border hover:border-accent transition-all duration-300"
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
