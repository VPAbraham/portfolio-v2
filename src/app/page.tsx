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
        <main className="container flex flex-col items-center bg-red-30">
          MAIN
          <Banner />
          <Skills />
          <Projects />
          {/* TODO: Section - Opener line, see what ive built*/}
          {/* TODO: Section - Selected Projects */}
          {/* TODO: Section - Contributions*/}
          {/* TODO: Section - Freelance Testimonials*/}
          {/* TODO: Section - My Skill Set*/}
          {/* TODO: Section - Contact Me*/}
        </main>
      </div>
      <Footer />
    </div>
  );
}
