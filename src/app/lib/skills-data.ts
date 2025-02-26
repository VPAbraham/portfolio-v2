import { SkillsCollection } from '@/types/skills';

export const skillsCollection: SkillsCollection = {
  languages: [
    { id: 'javascript', name: 'JavaScript (ES6+)', logoLink: 'JavaScript.svg' },
    { id: 'typescript', name: 'TypeScript', logoLink: 'TypeScript.svg' },
    { id: 'html', name: 'HTML', logoLink: 'HTML5.svg' },
    { id: 'css', name: 'CSS/SCSS/SASS', logoLink: 'CSS3.svg' },
    { id: 'python', name: 'Python', logoLink: 'Python.svg' },
    { id: 'sql', name: 'SQL', logoLink: 'SQL.svg' },
  ],
  frontend: [
    { id: 'react', name: 'React (Hooks)', logoLink: 'React.svg' },
    { id: 'angular', name: 'Angular', logoLink: 'Angular.svg' },
    { id: 'nextjs', name: 'Next.js', logoLink: 'Next.js.svg' },
    { id: 'redux', name: 'Redux', logoLink: 'Redux.svg' },
    { id: 'context-api', name: 'Context-API', logoLink: 'React.svg' },
    { id: 'ngrx', name: 'NgRx', logoLink: 'NgRx.svg' },
    { id: 'tailwind', name: 'Tailwind CSS', logoLink: 'Tailwind-CSS.svg' },
    { id: 'mui', name: 'Material UI', logoLink: 'Material-UI.svg' },
    { id: 'storybook', name: 'StorybookJS', logoLink: 'Storybook.svg' },
    { id: 'chartjs', name: 'Chart.js', logoLink: 'Chart.js.svg' },
    { id: 'rxjs', name: 'RxJS', logoLink: 'RxJS.svg' },
    {
      id: 'accessibility',
      name: 'WCAG/ARIA Compliance',
      logoLink: 'Accessibility.svg',
    },
  ],
  backend: [
    { id: 'nodejs', name: 'Node.js', logoLink: 'Node.js.svg' },
    { id: 'express', name: 'Express.js', logoLink: 'Express.svg' },
    { id: 'graphql', name: 'GraphQL (Apollo Client)', logoLink: 'GraphQL.svg' },
    { id: 'rest-api', name: 'REST API', logoLink: 'REST-API.svg' },
    {
      id: 'ruby-on-rails',
      name: 'Ruby on Rails',
      logoLink: 'Ruby-on-Rails.svg',
    },
    { id: 'stripe', name: 'Stripe (Payments)', logoLink: 'Stripe.svg' },
  ],
  database: [
    { id: 'mongodb', name: 'MongoDB', logoLink: 'MongoDB.svg' },
    { id: 'sql', name: 'SQL', logoLink: 'SQL.svg' },
  ],
  cloud: [
    {
      id: 'aws',
      name: 'AWS (CloudWatch, CodePipeline, CodeBuild)',
      logoLink: 'AWS.svg',
    },
    {
      id: 'vercel',
      name: 'Vercel (Next.js Deployment)',
      logoLink: 'Vercel.svg',
    },
    {
      id: 'sendgrid',
      name: 'SendGrid (Email Campaigns)',
      logoLink: 'SendGrid.svg',
    },
  ],
  devops: [
    { id: 'git', name: 'Git', logoLink: 'Git.svg' },
    { id: 'github', name: 'GitHub', logoLink: 'GitHub.svg' },
    {
      id: 'ci-cd',
      name: 'CI/CD Pipelines (GitHub Actions)',
      logoLink: 'GitHub-Actions.svg',
    },
    { id: 'webpack', name: 'Webpack', logoLink: 'Webpack.svg' },
  ],
  testing: [
    { id: 'jest', name: 'Jest', logoLink: 'Jest.svg' },
    { id: 'cypress', name: 'Cypress', logoLink: 'Cypress.svg' },
    { id: 'mocha', name: 'Mocha', logoLink: 'Mocha.svg' },
    { id: 'chai', name: 'Chai', logoLink: 'Chai.svg' },
    { id: 'selenium', name: 'Selenium', logoLink: 'Selenium.svg' },
    { id: 'sauce-labs', name: 'Sauce Labs', logoLink: 'Sauce-Labs.svg' },
    {
      id: 'lighthouse',
      name: 'Lighthouse (Performance/Accessibility)',
      logoLink: 'Lighthouse.svg',
    },
    {
      id: 'react-testing-library',
      name: 'React Testing Library',
      logoLink: 'React-Testing-Library.svg',
    },
  ],
  design: [
    { id: 'figma', name: 'Figma (UI Collaboration)', logoLink: 'Figma.svg' },
    { id: 'ux', name: 'UI/UX Design Collaboration', logoLink: 'UX.svg' },
  ],
  projectManagement: [
    { id: 'jira', name: 'JIRA (Agile Workflow)', logoLink: 'Jira.svg' },
    { id: 'loes', name: 'Level of Effort (LOE) Planning', logoLink: 'LOE.svg' },
    { id: 'agile', name: 'Agile Methodologies', logoLink: 'Agile.svg' },
  ],
};
