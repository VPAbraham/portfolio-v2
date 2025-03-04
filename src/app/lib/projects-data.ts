import { ProjectsCollection } from '@/types/projects';

export const projectsCollection: ProjectsCollection = {
  projects: [
    {
      id: 'outer-reach',
      name: 'Outer Reach Yoga Streaming',
      description:
        'A premium yoga streaming platform with HD video lessons, live classes, and personalized training plans.',
      imageUrl: '/projects/outer-reach.png',
      technologies: ['react', 'typescript', 'nodejs', 'express', 'SASS'],
    },
    {
      id: 'cannahauler',
      name: 'CannaHauler',
      description:
        'B2B and B2C professional cannabis transportation logistics software providing route optimization and compliance tracking.',
      imageUrl: '/projects/cannahualer.png',
      liveLink: 'https://cannahauler.com',
      technologies: ['react', 'typescript', 'nodejs', 'mongodb'],
    },
    {
      id: 'legal-thunder',
      name: 'Legal Thunder Calculator',
      description:
        'A comprehensive legal calculation tool for child support, maintenance buyouts, and spousal interest calculations.',
      imageUrl: '/projects/legal-thunder.png',
      githubLink: 'https://github.com/victorabraham/legal-thunder',
      technologies: ['react', 'javascript', 'tailwind'],
    },
    {
      id: 'charter-portal',
      name: 'Charter Communications Self-Service Portal',
      description:
        'A comprehensive portal for signing up and managing home phone, internet, TV and other telecom services.',
      imageUrl: '/projects/charter-portal.png',
      liveLink: 'https://selfservice.charter.com',
      technologies: ['angular', 'typescript', 'java', 'spring'],
    },
    {
      id: 'charter-streaming',
      name: 'Charter Communications Sports and News Streaming App',
      description:
        'A multi-platform streaming application delivering real-time sports updates, live events, and breaking news.',
      imageUrl: '/images/weather-news.jpg',
      liveLink: 'https://charterstreamingapp.com',
      technologies: ['nextjs', 'sass', 'chartjs'],
    },
  ],
};
