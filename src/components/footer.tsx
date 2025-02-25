export default function Footer() {
  return (
    <footer className="text-base-content py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Copyright Info */}
        <div className="text-center md:text-left">
          <p className="font-semibold">© 2025 VICTOR ABRAHAM</p>
          <p className="text-sm text-gray-500">BUILT IN DENVER</p>
        </div>

        {/* Right Column: Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 00-3.16 19.49c.5.09.69-.22.69-.49 0-.24-.01-.86-.01-1.69-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.59 9.59 0 015 0c1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.69-4.55 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10 10 0 0012 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.963v5.704h-3v-11h2.887v1.504h.041c.403-.76 1.387-1.562 2.852-1.562 3.048 0 3.618 2.007 3.618 4.618v6.44z" />
            </svg>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="btn btn-ghost btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 13.5l-12-8.5v14h24v-14l-12 8.5zm0-2.5l12-8h-24l12 8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
