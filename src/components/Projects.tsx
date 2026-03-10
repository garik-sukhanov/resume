"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  title: string;
  tech: string[];
  features: string[];
  image: string;
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full bg-card border-y border-border md:border-x md:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 mb-8 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Placeholder for Gallery Overlay */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex gap-2">
              {/* Gallery components would go here */}
              <div className="w-2 h-2 rounded-full bg-white/50" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6 bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-sm tracking-wider uppercase">
              <Layers className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold bg-background border border-border text-secondary rounded-full group-hover:border-accent group-hover:text-accent transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-secondary group-hover:text-foreground transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm lg:text-base leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-accent text-white dark:text-[#0d1117] rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all duration-300 shadow-lg shadow-accent/20">
              View Project
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const t = useTranslations("Index.projects");
  const items = t.raw("items") as ProjectItem[];

  return (
    <section id="projects" className="w-full bg-background pt-20 pb-32">
      <div className="container mx-auto px-4 max-w-5xl mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">
            {t("title")}
          </h2>
          <div className="h-1.5 w-20 bg-accent rounded-full" />
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto px-0 md:px-4 max-w-6xl">
          <div className="flex flex-col">
            {items.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
