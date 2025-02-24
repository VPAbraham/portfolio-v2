import { ReactNode } from 'react';
import { skillsCollection } from '@/app/lib/skills-data';
import { Skill } from '@/types/skills';
import Image from 'next/image';

export default function Skills() {
  const SkillsSection: ReactNode = Object.entries(skillsCollection).map(
    ([category, skillList]) => (
      <div key={category} className="mb-6">
        <h2 className="text-xl font-bold capitalize mb-4">{category}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillList.map((skill: Skill) => (
            <div
              key={skill.id}
              className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center"
            >
              <Image
                src={skill.logoLink}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-center font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );

  return (
    <div className="container mx-auto p-6">
      <p className="text-2xl font-bold mb-4">My Skill Set</p>
      {SkillsSection}
    </div>
  );
}
