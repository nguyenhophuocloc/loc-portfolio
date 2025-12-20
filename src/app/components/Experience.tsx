import { workExperience } from '@/types/mockData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>
        <div className="relative border-l border-zinc-800/50 ml-3">
          <div className="flex flex-col gap-20">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
