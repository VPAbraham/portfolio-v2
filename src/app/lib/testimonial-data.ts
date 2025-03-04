import { Testimonial } from '@/types/testimonials';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Engineering Manager',
    company: 'TechCorp',
    image: '/testimonials/sarah.jpg',
    content:
      'Victor is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and problem-solving skills made him an invaluable asset to our team. His React components were not only visually appealing but also remarkably efficient.',
    relationship: 'Former Manager',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Senior Developer',
    company: 'InnovateSoft',
    image: '/testimonials/michael.jpg',
    content:
      'Working alongside Victor was a fantastic experience. His deep knowledge of React and Next.js elevated our entire project. He&apos;s a team player who&apos;s always willing to share knowledge and help others. The performance optimizations he implemented reduced our load times by 40%.',
    relationship: 'Colleague',
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    role: 'Product Manager',
    company: 'Digital Solutions Inc.',
    image: '/testimonials/lisa.jpg',
    content:
      'Victor bridged the gap between design and development beautifully. He&apos;s highly collaborative and communicative, making the product development process smooth and efficient. His ability to translate complex requirements into elegant interfaces was remarkable.',
    relationship: 'Client',
  },
];
