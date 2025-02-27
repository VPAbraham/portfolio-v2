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

      <div className="w-full">
        <main className="flex flex-col">
          <div className="lg:container mx-auto px-8 py-16">
            <Hero />
            <section className="w-full mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8"></h2>
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
