// import Image from 'next/image';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Skills from '@/components/skills';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-blue-50">
      <Header />
      <div className="container mx-auto border border-black min-h-screen bg-green-100">
        <main className="container flex flex-col gap-8 items-center bg-red-100">
          MAIN
          {/* TODO: Section - Opener line, see what ive built*/}
          <Banner />
          {/* TODO: Section - Selected Projects */}
          <Projects />
          {/* TODO: Section - Contributions*/}
          {/* TODO: Section - Freelance Testimonials*/}
          {/* TODO: Section - My Skill Set*/}
          <Skills />
          {/* TODO: Section - Contact Me*/}
        </main>
      </div>
      <Footer />
    </div>
  );
}
