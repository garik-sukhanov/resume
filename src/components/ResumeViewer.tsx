'use client';

import { useTranslations, useLocale } from 'next-intl';
import { FileText, Download, ExternalLink, Mail, Github, MapPin } from 'lucide-react';
import Image from 'next/image';

export function ResumeViewer() {
  const t = useTranslations('Index');
  const locale = useLocale();

  const pdfUrl = locale === 'ru' 
    ? '/FullStack dev RU Sukhanov.pdf' 
    : '/FullStack dev EN Sukhanov.pdf';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {/* Sidebar with Profile */}
      <div className="md:col-span-1 space-y-6">
        <div className="rounded-xl border border-[#d0d7de] dark:border-[#30363d] overflow-hidden bg-white dark:bg-[#0d1117] shadow-sm">
          <div className="relative aspect-square w-full">
            <Image
              src="/sukhanov-photo.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-[#1f2328] dark:text-[#f0f6fc]">Sukhanov</h2>
            <div className="space-y-2 text-sm text-[#636c76] dark:text-[#8b949e]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote / Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:example@email.com" className="hover:text-[#0969da] dark:hover:text-[#2f81f7]">example@email.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0969da] dark:hover:text-[#2f81f7]">GitHub Profile</a>
              </div>
            </div>
            
            <div className="pt-4">
              <a
                href={pdfUrl}
                download
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-sm font-semibold hover:bg-[#ebf0f4] dark:hover:bg-[#30363d] transition-colors text-[#1f2328] dark:text-[#f0f6fc]"
              >
                <Download className="w-4 h-4" />
                {t('resume.download')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-2 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#1f2328] dark:text-[#f0f6fc]">
            <FileText className="w-6 h-6 text-[#0969da] dark:text-[#2f81f7]" />
            {t('coverLetter.title')}
          </h2>
          <div className="p-6 rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] shadow-sm prose dark:prose-invert max-w-none">
            <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed">
              {t('coverLetter.content')}
            </p>
          </div>
        </section>

        {/* CV Preview Placeholder */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#1f2328] dark:text-[#f0f6fc]">
            <ExternalLink className="w-6 h-6 text-[#0969da] dark:text-[#2f81f7]" />
            {t('resume.title')}
          </h2>
          <div className="relative aspect-[1/1.4] w-full rounded-xl border border-[#d0d7de] dark:border-[#30363d] bg-[#f6f8fa] dark:bg-[#161b22] overflow-hidden flex items-center justify-center">
             <iframe 
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="Resume PDF"
             />
          </div>
        </section>
      </div>
    </div>
  );
}
