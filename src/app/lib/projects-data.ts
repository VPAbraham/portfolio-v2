import { ProjectsCollection } from '@/types/projects';

export const projectsCollection: ProjectsCollection = {
  projects: [
    {
      id: 'charter-portal',
      name: 'Charter Communications Self-Service Portal',
      description:
        'A comprehensive portal for signing up and managing home phone, internet, TV and other telecom services.',
      imageUrl: '/projects/charter-portal.png',
      liveLink:
        'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjKrOm9svGLAxXFK0QIHVWqOwwYABADGgJkeg&co=1&ase=2&gclid=CjwKCAiA5pq-BhBuEiwAvkzVZc2CKjfmM_UCsUtMvSHXkjEYobsGQho3449H2SOuH2oT950st2m1HRoCrLkQAvD_BwE&ei=3XPHZ7D-KJ6hur8P_urbyAo&ohost=www.google.com&cid=CAESVuD2N8cRfwR2tV-rkAEM_rzOQCEtfMRDERywyqVTIwFLqwqc_V3Ttn_9zSbCPti540nu6DERAPf3bFpFqbPnQbtWoreakMKXCmsfWynUEJRTP45VXF0y&sig=AOD64_3IneMXXN1lgT5dCc7-xFd3e72MlQ&q&sqi=2&nis=4&adurl&ved=2ahUKEwjw4OS9svGLAxWekO4BHX71FqkQqyQoAnoECAgQDw',
      technologies: [
        'angular',
        'typescript',
        'graphql',
        'express',
        'jest',
        'AWS',
      ],
    },
    {
      id: 'spectrum-streaming',
      name: 'Spectrum Sports and News Streaming App',
      description:
        'A multi-platform streaming application delivering real-time sports updates, live events, and breaking news. ',
      imageUrl: '/projects/spectrum-streaming.png',
      liveLink: 'https://www.spectrum.com/cable-tv/streaming/spectrum-tv-app',
      technologies: ['react', 'graphql', 'AWS', 'Docker', 'ExpressJS'],
    },
    {
      id: 'cannahauler',
      name: 'CannaHauler',
      description:
        'B2B and B2C professional cannabis transportation logistics software providing route optimization and compliance tracking.',
      imageUrl: '/projects/cannahualer.png',
      liveLink: 'https://cannahauler.io/',
      technologies: ['angular', 'typescript', 'nodejs', 'graphql', 'express'],
    },
    {
      id: 'outer-reach',
      name: 'Outer Reach Yoga Streaming',
      description:
        'A premium yoga streaming platform with HD video lessons, live classes, and personalized training plans. (This company has sadly, gone out of business)',
      imageUrl: '/projects/outer-reach.png',
      technologies: [
        'react',
        'typescript',
        'node.js',
        'REST API',
        'express',
        'MongoDB',
        'SASS',
      ],
    },
    {
      id: 'legal-thunder',
      name: 'Legal Thunder Calculator',
      description:
        'A comprehensive legal calculation tool for child support, maintenance buyouts, and spousal interest calculations.',
      imageUrl: '/projects/legal-thunder.png',
      liveLink: 'https://www.legalthunderapps.com/',
      technologies: ['react', 'javascript', 'node.js', 'jest', 'sass', ''],
    },
    {
      id: 'portfolio-v2',
      name: 'Portfolio Site',
      description: 'View the repository for this portfolio site!',
      imageUrl: '/projects/name.png',
      githubLink: 'https://github.com/VPAbraham/portfolio-v2',
      technologies: ['Next.js', 'React', 'Tailwind-CSS', 'DaisyUI', 'Vercel'],
    },
  ],
};
