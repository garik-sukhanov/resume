'use client';

import { useTheme } from 'next-themes';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Sun, Moon, Github, Mail, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Header');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ru' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d0d7de] dark:border-[#30363d] bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <Link href="/" className="font-semibold text-lg flex items-center gap-2">
          <Github className="w-6 h-6" />
          <span className="hidden sm:inline">Resume</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="p-2 rounded-md hover:bg-[#f3f4f6] dark:hover:bg-[#21262d] transition-colors flex items-center gap-2"
            aria-label={t('language')}
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium uppercase">{locale}</span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-[#f3f4f6] dark:hover:bg-[#21262d] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className="h-6 w-px bg-[#d0d7de] dark:border-[#30363d] hidden sm:block" />

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#f3f4f6] dark:hover:bg-[#21262d] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-2 rounded-md hover:bg-[#f3f4f6] dark:hover:bg-[#21262d] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
