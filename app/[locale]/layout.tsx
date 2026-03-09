import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/src/components/Providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const isRu = locale === "ru";

  return {
    title: isRu
      ? "Fullstack Разработчик | Резюме"
      : "Fullstack Developer | Resume",
    description: isRu
      ? "Портфолио и резюме Fullstack разработчика. Специализация на React, Next.js и TypeScript."
      : "Fullstack Developer Portfolio and Resume. Specialized in React, Next.js, and TypeScript.",
    openGraph: {
      title: isRu
        ? "Fullstack Разработчик | Резюме"
        : "Fullstack Developer | Resume",
      description: isRu
        ? "Портфолио и резюме Fullstack разработчика."
        : "Fullstack Developer Portfolio and Resume.",
      type: "website",
      locale: locale,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0d1117] text-[#24292f] dark:text-[#c9d1d9]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
