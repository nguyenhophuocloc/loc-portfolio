'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from './SkillCard';
import { listGroupSkill, skillItem } from '@/types/mockData';

const Skill = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [skills, setSkills] = useState(
    skillItem.filter((item) => item.type === 1)
  );

  const handleSelected = (value: number) => {
    setSelectedGroup(value);
    const newSkills =
      value === 0 ? skillItem : skillItem.filter((item) => item.type === value);
    setSkills(newSkills);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <p className="text-zinc-400 mt-4 max-w-[60ch]">
            The tools and technologies I use to turn ideas into production-ready
            products.
          </p>
        </div>

        {/* Filter Tab */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900/50 border border-white/5 rounded-2xl w-fit mb-12">
          {listGroupSkill.map(({ name, value }) => (
            <button
              key={value}
              onClick={() => handleSelected(value)}
              className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                selectedGroup === value
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {selectedGroup === value && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl shadow-inner"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </button>
          ))}
        </div>

        {/* Skill Grid with Animation */}
        <motion.div
          layout
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {skills.map((skill) => (
              <motion.div
                key={skill.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Skill;
