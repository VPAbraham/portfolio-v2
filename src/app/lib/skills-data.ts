import { SkillsCollection } from '@/types/skills';

export const skillsCollection: SkillsCollection = {
  languages: [
    { id: 'javascript', name: 'JavaScript (ES6+)', logoLink: '' },
    { id: 'typescript', name: 'TypeScript', logoLink: '' },
    { id: 'html', name: 'HTML', logoLink: '' },
    { id: 'css', name: 'CSS/SCSS/SASS', logoLink: '' },
    { id: 'python', name: 'Python', logoLink: '' },
    { id: 'sql', name: 'SQL', logoLink: '' },
  ],
  frontend: [
    { id: 'react', name: 'React (Hooks)', logoLink: '' },
    { id: 'angular', name: 'Angular', logoLink: '' },
    { id: 'nextjs', name: 'Next.js', logoLink: '' },
    { id: 'redux', name: 'Redux', logoLink: '' },
    { id: 'context-api', name: 'Context API', logoLink: '' },
    { id: 'ngrx', name: 'NgRx', logoLink: '' },
    { id: 'tailwind', name: 'Tailwind CSS', logoLink: '' },
    { id: 'mui', name: 'Material UI', logoLink: '' },
    { id: 'storybook', name: 'StorybookJS', logoLink: '' },
    { id: 'chartjs', name: 'Chart.js', logoLink: '' },
    { id: 'rxjs', name: 'RxJS', logoLink: '' },
    { id: 'accessibility', name: 'WCAG/ARIA Compliance', logoLink: '' },
  ],
  backend: [
    { id: 'nodejs', name: 'Node.js', logoLink: '' },
    { id: 'express', name: 'Express.js', logoLink: '' },
    { id: 'graphql', name: 'GraphQL (Apollo Client)', logoLink: '' },
    { id: 'rest-api', name: 'REST API', logoLink: '' },
    { id: 'ruby-on-rails', name: 'Ruby on Rails', logoLink: '' },
    { id: 'stripe', name: 'Stripe (Payments)', logoLink: '' },
  ],
  database: [
    { id: 'mongodb', name: 'MongoDB', logoLink: '' },
    { id: 'sql', name: 'SQL', logoLink: '' },
  ],
  cloud: [
    {
      id: 'aws',
      name: 'AWS (CloudWatch, CodePipeline, CodeBuild)',
      logoLink: '',
    },
    { id: 'vercel', name: 'Vercel (Next.js Deployment)', logoLink: '' },
    { id: 'sendgrid', name: 'SendGrid (Email Campaigns)', logoLink: '' },
  ],
  devops: [
    { id: 'git', name: 'Git', logoLink: '' },
    { id: 'github', name: 'GitHub', logoLink: '' },
    { id: 'ci-cd', name: 'CI/CD Pipelines (GitHub Actions)', logoLink: '' },
    { id: 'webpack', name: 'Webpack', logoLink: '' },
  ],
  testing: [
    { id: 'jest', name: 'Jest', logoLink: '' },
    { id: 'cypress', name: 'Cypress', logoLink: '' },
    { id: 'mocha', name: 'Mocha', logoLink: '' },
    { id: 'chai', name: 'Chai', logoLink: '' },
    { id: 'selenium', name: 'Selenium', logoLink: '' },
    { id: 'sauce-labs', name: 'Sauce Labs', logoLink: '' },
    {
      id: 'lighthouse',
      name: 'Lighthouse (Performance/Accessibility)',
      logoLink: '',
    },
    {
      id: 'react-testing-library',
      name: 'React Testing Library',
      logoLink: '',
    },
  ],
  design: [
    { id: 'figma', name: 'Figma (UI Collaboration)', logoLink: '' },
    { id: 'ux', name: 'UI/UX Design Collaboration', logoLink: '' },
  ],
  projectManagement: [
    { id: 'jira', name: 'JIRA (Agile Workflow)', logoLink: '' },
    { id: 'loes', name: 'Level of Effort (LOE) Planning', logoLink: '' },
    { id: 'agile', name: 'Agile Methodologies', logoLink: '' },
  ],
};
