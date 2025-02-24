export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
}

export interface ProjectsCollection {
  projects: Project[];
}
