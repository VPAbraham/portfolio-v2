// testimonials.ts
export interface Testimonial {
  id: string;
  title: string;
  date: string;
  rating: number;
  content: string;
  client: {
    name: string;
    company?: string;
    role?: string;
  };
  project: {
    type: string;
    tags: string[];
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '8',
    title: 'E-commerce Platform Performance Optimization',
    date: 'Mar 15, 2024',
    rating: 5,
    content:
      'Victor transformed our struggling e-commerce site into a blazing fast experience. Our load times decreased by 70% and conversion rates have increased significantly. His expertise in Next.js and performance optimization was exactly what we needed. He communicated progress clearly and delivered ahead of schedule. The documentation he provided will help our team maintain the improvements long-term.',
    client: {
      name: 'Samantha Reynolds',
      company: 'NovaTech Solutions',
      role: 'E-commerce Director',
    },
    project: {
      type: 'Performance Optimization',
      tags: ['Next.js', 'E-commerce', 'Web Vitals', 'SEO', 'Performance'],
    },
  },
  {
    id: '9',
    title: 'React Native Mobile App Development',
    date: 'Nov 8, 2023',
    rating: 5,
    content:
      "Working with Victor on our mobile app was an outstanding experience. His ability to translate our design requirements into a smooth, responsive application exceeded our expectations. Victor's deep understanding of React Native architecture helped us avoid common pitfalls and implement best practices from the start. The app launched successfully with minimal bugs and has received excellent user feedback.",
    client: {
      name: 'Marcus Kim',
      company: 'AppSphere Technologies',
      role: 'Product Lead',
    },
    project: {
      type: 'Mobile Development',
      tags: [
        'React Native',
        'Mobile',
        'UI/UX',
        'Cross-platform',
        'API Integration',
      ],
    },
  },
  {
    id: '10',
    title: 'Dashboard Analytics Visualization',
    date: 'Aug 22, 2023',
    rating: 5,
    content:
      'Victor built a sophisticated analytics dashboard that transformed how we visualize our data. His expertise with data visualization libraries and attention to UX details resulted in an intuitive interface that our entire team loves using. The dashboard has become an essential tool for our decision-making process. Victor was responsive, detail-oriented, and delivered exactly what we needed.',
    client: {
      name: 'Rachel Foster',
      company: 'DataVision Analytics',
      role: 'Analytics Manager',
    },
    project: {
      type: 'Data Visualization',
      tags: [
        'React',
        'D3.js',
        'Dashboard',
        'Data Visualization',
        'Responsive Design',
      ],
    },
  },
  {
    id: '11',
    title: 'Frontend Microservices Architecture Implementation',
    date: 'Apr 5, 2023',
    rating: 5,
    content:
      'Victor helped us modernize our frontend architecture by implementing a microservices approach. His technical expertise was invaluable as we transitioned from a monolithic codebase to a more scalable solution. The modular structure he designed has made our development process significantly more efficient and reduced deployment issues. His documentation was thorough and made the knowledge transfer seamless.',
    client: {
      name: 'Daniel Park',
      company: 'Nexus Software Systems',
      role: 'Engineering Manager',
    },
    project: {
      type: 'Architecture Design',
      tags: ['Microservices', 'React', 'Next.js', 'CI/CD', 'Scalability'],
    },
  },
  {
    id: '12',
    title: 'Real-time Collaboration Tool Enhancement',
    date: 'Oct 17, 2022',
    rating: 5,
    content:
      'Victor took our real-time collaboration features to the next level. His implementation of WebSockets and state management optimizations significantly improved the user experience. He showed exceptional problem-solving skills when handling complex synchronization challenges. The code quality was outstanding, and his proactive communication made working with him a pleasure. Our team productivity metrics have improved by 35% since implementing these enhancements.',
    client: {
      name: 'Laura Wilson',
      company: 'CollabWare Solutions',
      role: 'Product Manager',
    },
    project: {
      type: 'Real-time Features',
      tags: [
        'WebSockets',
        'React',
        'State Management',
        'Collaboration',
        'Real-time',
      ],
    },
  },
  {
    id: '13',
    title: 'Accessibility Compliance Overhaul',
    date: 'May 3, 2022',
    rating: 5,
    content:
      "Victor's work on improving our application's accessibility was outstanding. He conducted a thorough audit and implemented comprehensive fixes that brought our platform into WCAG 2.1 AA compliance. His knowledge of accessibility best practices and attention to detail ensured that our application is now usable by everyone. The improvements were implemented with minimal disruption to our existing codebase. We'll definitely work with him again on future projects.",
    client: {
      name: 'James Mitchell',
      company: 'AccessHub Digital',
      role: 'Accessibility Lead',
    },
    project: {
      type: 'Accessibility',
      tags: [
        'WCAG',
        'Accessibility',
        'Semantic HTML',
        'ARIA',
        'Screen Reader Support',
      ],
    },
  },
  {
    id: '1',
    title: 'Quick Refinements to Webpage',
    date: 'Aug 7, 2020',
    rating: 5,
    content:
      'Victor is an excellent coder and a very friendly client! I am glad to have met him because he is highly skilled and dedicated to providing high-quality work and efficient development. I enjoyed working with him and look forward to future collaborations. Excellent experience!',
    client: {
      name: 'Alex Johnson',
      company: 'DigitalCraft Studios',
      role: 'Project Manager',
    },
    project: {
      type: 'Web Development',
      tags: ['React', 'Frontend', 'UI/UX', 'Performance Optimization'],
    },
  },
  {
    id: '2',
    title: 'JavaScript Typewriter Effect Implementation',
    date: 'Aug 4, 2020',
    rating: 5,
    content:
      'On behalf of the DeafMatrix company, we want to thank Victor for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with Victor really took our website to the next level! He thinks about problems, finds solutions and has an awesome morale. Great communication, varied working skills in outreaching and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his programming is incredibly professional, fast, and reliable. Thank You Again, DeafMatrix',
    client: {
      name: 'DeafMatrix Team',
      company: 'DeafMatrix',
      role: 'Client',
    },
    project: {
      type: 'Frontend Development',
      tags: ['JavaScript', 'Animation', 'Interactive UI', 'Accessibility'],
    },
  },
  {
    id: '3',
    title: 'Center WooCommerce Shop Categories',
    date: 'Jul 27, 2020',
    rating: 5,
    content:
      "I had an issue with a website and couldn't figure out how to handle it myself. I contracted Victor because of the positive reviews left by other contractors. He was very communicative and let me know when he would be working on the project. He did a lovely job.",
    client: {
      name: 'Emily Parker',
      company: 'Boutique Essentials',
      role: 'Shop Owner',
    },
    project: {
      type: 'E-commerce',
      tags: ['WordPress', 'WooCommerce', 'CSS', 'Layout'],
    },
  },
  {
    id: '4',
    title: 'Squarespace Website Technical and Design Elements',
    date: 'Jun 9-10, 2020',
    rating: 5,
    content:
      'Victor is a terrific developer. Very knowledgeable, friendly to work with, and hard working to keep a complex job moving along and hit deadlines. He was very responsive and tolerant of several rounds of change, with very fast turnaround times toward the end of the project which was most appreciated by me. His process and code look great and will be easy to maintain. I will definitely work with him again.',
    client: {
      name: 'Thomas Wright',
      company: 'Creative Solutions',
      role: 'Creative Director',
    },
    project: {
      type: 'Web Development',
      tags: ['Squarespace', 'Parallax Scroll', 'Advanced CSS', 'Performance'],
    },
  },
  {
    id: '5',
    title: 'Fix for WordPress Images Not Displaying in Safari',
    date: 'Feb 27, 2020',
    rating: 5,
    content:
      'Victor is absolutely amazing! No wonder he is a rising star. He understands direction easily & works very hard to find a solution. His communication has been amazing and he is a freelancer you wish to work with! Thank you for everything Victor!! Look forward to more work with you!',
    client: {
      name: 'Rebecca Thompson',
      company: 'Thompson Media Group',
      role: 'Content Manager',
    },
    project: {
      type: 'WordPress Troubleshooting',
      tags: ['WordPress', 'Safari', 'Cross-browser Compatibility', 'Debugging'],
    },
  },
  {
    id: '6',
    title: 'Next.js & Gatsby.js Development for Personal Blog',
    date: 'Feb 14-15, 2020',
    rating: 5,
    content:
      'I was in urgent need of my blog site and Victor was super - he completed such a site in one day! Extraordinary work. When you need a Gatsby, Contentful CMS job, just hire him.',
    client: {
      name: 'David Chen',
      company: 'Tech Insights',
      role: 'Content Creator',
    },
    project: {
      type: 'Blog Development',
      tags: ['Next.js', 'Gatsby.js', 'React', 'Contentful CMS', 'JAMstack'],
    },
  },
  {
    id: '7',
    title: 'Advanced JavaScript Animation Implementation',
    date: 'Feb 8, 2020',
    rating: 5,
    content:
      "Victor was fantastic! Quickly implemented sophisticated animations that exceeded my expectations. His deep knowledge of JavaScript animation techniques delivered a highly polished user experience that significantly enhanced our website's professionalism. Very happy with the end result and I will definitely be hiring him again for all my frontend development needs.",
    client: {
      name: 'Jennifer Martinez',
      company: 'Visual Dynamics',
      role: 'UX Designer',
    },
    project: {
      type: 'Frontend Development',
      tags: [
        'JavaScript',
        'Animation',
        'UI/UX',
        'Performance',
        'Interactive Elements',
      ],
    },
  },
];
