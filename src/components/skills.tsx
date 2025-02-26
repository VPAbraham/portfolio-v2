'use-client';
import { ReactNode } from 'react';
import { skillsCollection } from '@/app/lib/skills-data';
import { Skill } from '@/types/skills';
import Image from 'next/image';

export default function Skills() {
  const SkillsSection: ReactNode = Object.entries(skillsCollection).map(
    ([category, skillList]) => (
      <div key={category} className="mb-6">
        <h2 className="text-xl font-bold capitalize mb-4">{category}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillList.map((skill: Skill) => (
            <div
              key={skill.id}
              className="relative flex flex-col items-center justify-center hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              {/* Image Icon */}
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={skill.logoLink}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full opacity-80 group-hover:opacity-100"
                />
              </div>
              {/* Skill Name with Hover */}
              <p className="text-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {skill.name}
              </p>
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
