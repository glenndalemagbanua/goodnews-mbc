import { Navigation } from "@/app/components/navigation";
import { HeroSection } from "@/app/components/hero-section";
import { DoctrinesSection } from "@/app/components/doctrines-section";
import { GallerySection } from "@/app/components/gallery-section";
import { VideosSection } from "@/app/components/videos-section";
import { ContactSection } from "@/app/components/contact-section";
import { Footer } from "@/app/components/footer";
import { ThemeProvider } from "@/app/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navigation />
        <HeroSection />
        <DoctrinesSection />
        <GallerySection />
        <VideosSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}