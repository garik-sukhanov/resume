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
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as unknown as {
    Index: {
      seo: {
        title: string;
        description: string;
        keywords: string;
      };
    };
  };
  const seo = messages.Index.seo;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sukhanov.dev"; // Fallback URL

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: locale,
      url: `${baseUrl}/${locale}`,
      siteName: seo.title,
      images: [
        {
          url: `${baseUrl}/sukhanov-photo.jpg`,
          width: 800,
          height: 800,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${baseUrl}/sukhanov-photo.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as unknown as {
    Index: {
      personalInfo: {
        name: string;
        prof: string;
      };
      contact: {
        github: { link: string };
        telegram: { link: string };
      };
      description: string;
    };
  };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sukhanov.dev";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: messages.Index.personalInfo.name,
              jobTitle: messages.Index.personalInfo.prof,
              url: baseUrl,
              sameAs: [
                messages.Index.contact.github.link,
                messages.Index.contact.telegram.link,
              ],
              image: `${baseUrl}/sukhanov-photo.jpg`,
              description: messages.Index.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Voronezh",
                addressRegion: "Russia",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
