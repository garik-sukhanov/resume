import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { ResumeViewer } from "@/src/components/ResumeViewer";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 max-w-5xl">
        <Hero />
        <ResumeViewer />
      </main>
      <Footer />
    </div>
  );
}
