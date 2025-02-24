export interface Skill {
  id: string;
  logoLink: string;
  name: string;
}

export interface SkillsCollection {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  cloud: Skill[];
  devops: Skill[];
  testing: Skill[];
  design: Skill[];
  projectManagement: Skill[];
}
