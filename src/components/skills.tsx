'use client';
import { skillsCollection } from '@/app/lib/skills-data';
import { Skill } from '@/types/skills';
import Image from 'next/image';
import { useMemo } from 'react';

export default function Skills() {
  // Function to format category names properly
  const formatCategoryName = (category: string) => {
    // Capitalize first letter and add proper spacing
    return category
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Pre-process the skill categories
  const formattedSkillsCollection = useMemo(() => {
    return Object.entries(skillsCollection).map(([category, skillList]) => ({
      category,
      displayName: formatCategoryName(category),
      skills: skillList,
    }));
  }, []);

  return (
    <div className="w-full py-12" id="skills">
      <h2 className="text-4xl hero-text text-gray-900 font-bold mb-12">
        MY SKILL SET
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {formattedSkillsCollection.map(({ category, displayName, skills }) => (
          <div
            key={category}
            className="border border-gray-100 rounded-lg shadow-sm p-6 md:p-8 bg-white"
          >
            <h3 className="text-xl md:text-2xl text-gray-800 font-medium mb-6 capitalize">
              {displayName}
            </h3>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {skills.map((skill: Skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center group hover:transform hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-gray-50 rounded-lg p-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                      <Image
                        src={`/logo-images/${skill.logoLink}`}
                        alt={skill.name}
                        fill
                        sizes="(max-width: 768px) 40px, 48px"
                        style={{ objectFit: 'contain' }}
                        className="opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <p className="text-center text-xs md:text-sm text-gray-700 font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
