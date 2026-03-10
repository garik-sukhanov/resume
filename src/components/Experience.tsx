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
      <h2 className="text-xl font-bold flex items-center gap-2 text-foreground transition-colors duration-300">
        <Briefcase className="w-5 h-5 text-accent" />
        {t("title")}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-card-border bg-card shadow-sm transition-colors duration-300"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {item.role}
                </h3>
                <p className="text-md text-secondary">{item.company}</p>
              </div>
              <span className="text-sm text-secondary whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {item.description
                .split("- ")
                .filter(Boolean)
                .map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">
                      {point.trim()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
