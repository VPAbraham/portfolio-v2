'use client';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-start justify-center px-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-yellow-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-7xl hero-text text-gray-900 leading-tight mb-8 uppercase">
          WRITING CODE <br />
          THAT BRINGS IDEAS <br />
          TO LIFE.
        </h1>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center text-gray-900 group"
          >
            <span className="mr-2 nav-link tracking-wider text-sm uppercase">
              SEE WHAT I HAVE BEEN WORKING ON
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="12"
              viewBox="0 0 80 12"
              className="transform transition-transform group-hover:translate-x-2"
            >
              <line
                x1="0"
                y1="6"
                x2="70"
                y2="6"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <polygon points="65,2 72,6 65,10" fill="#f59e0b" />
            </svg>
          </a>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
