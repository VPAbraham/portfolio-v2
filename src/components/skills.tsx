'use client';
import { skillsCollection } from '@/app/lib/skills-data';
import { Skill } from '@/types/skills';
import Image from 'next/image';

export default function Skills() {
  return (
    <div className="w-full py-12">
      <h2 className="text-4xl hero-text text-gray-900 uppercase mb-12">
        MY SKILL SET
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsCollection).map(([category, skillList]) => (
          <div key={category} className="border border-gray-200 p-8">
            <h3 className="text-2xl text-gray-700 mb-8 lowercase">
              {category}
            </h3>

            <div className="grid grid-cols-3 gap-6">
              {skillList.map((skill: Skill) => (
                <div key={skill.id} className="flex flex-col items-center">
                  <div className="bg-gray-100 p-4 w-24 h-24 flex items-center justify-center mb-3">
                    <div className="relative w-14 h-14">
                      <Image
                        src={`/logo-images/${skill.logoLink}`}
                        alt={skill.name}
                        fill
                        sizes="100%"
                        style={{ objectFit: 'contain' }}
                        className="opacity-90"
                      />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-600">
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
