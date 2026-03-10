"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

interface ProjectItem {
  title: string;
  tech: string[];
  features: string[];
  images: string[] | null;
}

function ProjectSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50%" });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex = currentIndex + newDirection;
      if (newIndex >= 0 && newIndex < images.length) {
        setDirection(newDirection);
        setCurrentIndex(newIndex);
      } else if (newIndex < 0) {
        setDirection(-1);
        setCurrentIndex(images.length - 1);
      } else {
        setDirection(1);
        setCurrentIndex(0);
      }
    },
    [currentIndex, images.length],
  );

  // Autoplay on hover/in-view
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered || isInView) {
      timer = setInterval(() => {
        paginate(1);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isHovered, isInView, paginate]);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden bg-card flex items-center justify-center">
        <ImageIcon className="w-24 h-24 text-border" />
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden bg-card transition-colors duration-300 group/slider"
    >
      {/* Click Navigation Areas */}
      <div
        className="absolute inset-y-0 left-0 w-1/4 z-30 cursor-w-resize"
        onClick={(e) => {
          e.stopPropagation();
          paginate(-1);
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/4 z-30 cursor-e-resize"
        onClick={(e) => {
          e.stopPropagation();
          paginate(1);
        }}
      />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 p-4"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={`${title} - image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={currentIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/5 group-hover/slider:bg-black/10 transition-colors duration-300 pointer-events-none z-10" />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover/slider:opacity-100 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover/slider:opacity-100 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-accent" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50%" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full bg-card border-y border-border md:border-x md:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 mb-8 last:mb-0"
    >
      {/* Gradient highlight for active card */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent via-green-500 to-accent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <ProjectSlider images={project.images || []} title={project.title} />
        </div>

        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6 bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent font-medium text-sm tracking-wider uppercase">
              <Layers className="w-4 h-4" />
              <span>Case {index + 1}</span>
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
