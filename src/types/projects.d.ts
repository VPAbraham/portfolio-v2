export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  technologies?: string[]; // Array of technology names that correspond to icon filenames
}

export interface ProjectsCollection {
  projects: Project[];
}
