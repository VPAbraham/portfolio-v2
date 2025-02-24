import { ProjectsCollection } from '@/types/projects';

export const projectsCollection: ProjectsCollection = {
  projects: [
    {
      id: 'yoga-streaming',
      name: 'Yoga Live Streaming Platform',
      description:
        'A seamless live-streaming platform built with React and TypeScript, backed by a Node.js API.',
      imageUrl: '/images/yoga-streaming.jpg',
      liveLink: 'https://yogalivestream.com',
      githubLink: 'https://github.com/victorabraham/yoga-streaming',
    },
    {
      id: 'legal-calc',
      name: 'Legal Calculation Tool',
      description:
        'A web-based calculator for legal professionals to simplify complex financial computations.',
      imageUrl: '/images/legal-calc.jpg',
      githubLink: 'https://github.com/victorabraham/legal-calc',
    },
    {
      id: 'weather-news',
      name: 'Weather & News Streaming App',
      description:
        'A Samsung Tizen-compatible app delivering real-time weather and news updates.',
      imageUrl: '/images/weather-news.jpg',
      liveLink: 'https://weathernewsapp.com',
    },
  ],
};
