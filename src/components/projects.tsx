'use client';
import { projectsCollection } from '@/app/lib/projects-data';
import type { Project } from '@/types/projects';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  // Track image loading errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [techIconErrors, setTechIconErrors] = useState<Record<string, boolean>>(
    {}
  );

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };

  const handleTechIconError = (techId: string) => {
    setTechIconErrors((prev) => ({
      ...prev,
      [techId]: true,
    }));
  };

  return (
    <div className="w-full py-12" id="projects">
      <h2 className="text-4xl hero-text text-gray-900 font-bold mb-8">
        Selected Projects
      </h2>
      <div className="space-y-8">
        {projectsCollection.projects.map((project: Project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center accent-card p-6 rounded-lg"
          >
            {/* Text Content */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 font-work-sans">
                {project.name}
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>

              {/* Technology Icons */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center justify-center bg-gray-50 rounded-md py-1 px-2 shadow-sm"
                      title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                    >
                      {!techIconErrors[tech] ? (
                        <div className="relative w-5 h-5 mr-1">
                          <Image
                            src={`/logo-images/${tech}.svg`}
                            alt={tech}
                            fill
                            sizes="20px"
                            style={{ objectFit: 'contain' }}
                            onError={() => handleTechIconError(tech)}
                          />
                        </div>
                      ) : (
                        <span className="w-5 h-5 mr-1 flex items-center justify-center text-xs font-semibold text-gray-600 font-work-sans">
                          {tech.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span className="text-xs font-medium text-gray-700 font-work-sans">
                        {tech.charAt(0).toUpperCase() + tech.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 space-x-4 flex">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 rounded border border-indigo-300 p-2 hover:border-indigo-500 text-blue-600 transition-colors inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                    Live Application
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 rounded border border-indigo-300 p-2 hover:border-indigo-500 text-blue-600 transition-colors inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a10 10 0 00-3.16 19.49c.5.09.69-.22.69-.49 0-.24-.01-.86-.01-1.69-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.59 9.59 0 015 0c1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.69-4.55 4.94.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10 10 0 0012 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
            {/* Project Image */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              {!imageErrors[project.id] ? (
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={600}
                  height={256}
                  className="w-full h-64 rounded-lg shadow-md object-cover"
                  onError={() => handleImageError(project.id)}
                />
              ) : (
                <div className="w-full h-64 rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-3 bg-white p-3 rounded-full inline-flex items-center justify-center shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-base font-medium text-gray-700 font-work-sans">
                      {project.name}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
