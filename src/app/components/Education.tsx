import { educations } from '@/types/mockData';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="education">
      {/* Background decoration: adds a subtle light effect to avoid empty space */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left column: section title and introduction */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6">
              Education
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Building a strong foundation in critical thinking and specialized
              expertise within a premier technical environment.
            </p>

            {/* Small visual detail to balance the left column */}
            <div className="mt-10 hidden lg:block">
              <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent mb-4" />
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                Academic Excellence
              </p>
            </div>
          </div>

          {/* Right column: education cards */}
          <div className="lg:w-2/3 w-full flex justify-end">
            {educations.map((edu, key) => (
              <EducationCard key={key} {...edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
