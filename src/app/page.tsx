import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";
import { sections } from "@/data/blog";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <div className="mx-auto flex max-w-7xl gap-10 px-4 sm:px-6 lg:px-8">
        <Sidebar />
        <div className="min-w-0 flex-1">
          {sections.map((section) => (
            <BlogSection key={section.id} section={section} />
          ))}
          <Footer />
        </div>
      </div>
    </main>
  );
}
