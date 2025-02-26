import Hero from '@/components/hero';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import ContactMe from '@/components/contactMe';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col w-full">
        <Hero />

        {/* Other sections with appropriate padding and borders */}
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
          <section className="w-full mb-16">
            <Skills />
          </section>

          <Projects />
          <ContactMe />
        </div>
      </main>

      <Footer />
    </div>
  );
}
