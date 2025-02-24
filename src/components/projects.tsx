'use-client';
import { projectsCollection } from '@/app/lib/projects-data';
import type { Project } from '@/types/projects';

export default function Projects() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
      <div className="space-y-8">
        {projectsCollection.projects.map((project: Project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            {/* Text Content */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="mt-4 space-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Project
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
            {/* Project Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
