import { ReactNode } from 'react';
import { Skills } from '@/types/skills';

export default function Skills() {
  const data: Skills[] = [];
  // const sections: ReactNode[] = data.map((section) => {
  //   return <div key={section?id}>{section}</div>;
  // });
  return (
    <div className="container mx-auto">
      <p>My Skill Set</p>
      <div className="grid grid-col-3">{}</div>
    </div>
  );
}
