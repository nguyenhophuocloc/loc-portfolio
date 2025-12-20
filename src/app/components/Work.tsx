import { works } from '@/types/mockData';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <section id="project" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Featured Works
          </h2>
          <p className="text-zinc-400 mt-4 max-w-[60ch]">
            Exploring the intersection of design and development through
            real-world applications.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {works.map((item, key) => (
            <ProjectCard key={key} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
