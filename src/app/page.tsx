import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import ContactMe from '@/components/contactMe';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="w-full">
        <main className="flex flex-col">
          <Hero />

          {/* Other sections with appropriate padding */}
          <div className="container mx-auto max-w-screen-lg px-6 lg:px-12 py-16">
            <section className="w-full mb-16">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                My Skill Set
              </h2>
              <Skills />
            </section>

            <Projects />
            <ContactMe />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
