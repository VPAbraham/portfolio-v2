import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import ContactMe from '@/components/contactMe';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-blue-50 min-h-screen">
      <Header />

      {/* Centered Main Content */}
      <div className="container mx-auto max-w-screen-lg px-6 lg:px-12 py-8">
        <main className="flex flex-col items-center space-y-12">
          <Hero />

          {/* Skills Section - Responsive Grid */}
          <section className="w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">
              My Skill Set
            </h2>
            <div className="">
              <Skills />
            </div>
          </section>

          <Projects />
          <ContactMe />
        </main>
      </div>

      <Footer />
    </div>
  );
}
