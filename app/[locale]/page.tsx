import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { ProfileSidebar } from "@/src/components/ProfileSidebar";
import { Footer } from "@/src/components/Footer";

import { TechStack } from "@/src/components/TechStack";
import { Experience } from "@/src/components/Experience";
import { Projects } from "@/src/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="md:col-span-1">
              <ProfileSidebar />
            </div>
            <div className="md:col-span-2 space-y-8">
              <Hero />
              <TechStack />
              <Experience />
            </div>
          </div>
        </div>
        
        {/* Projects section outside the main container for full-width capability */}
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
