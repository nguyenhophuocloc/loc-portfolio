import { milestones } from "@/types/mockData";

const Journey = () => {

  return (
    <section id="journey" className="section py-24">
      <div className="container max-w-5xl">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            My Journey
          </h2>
        </div>

        <div className="max-w-3xl"> 
          {milestones.map((item, index) => (
            <div key={index} className="relative flex gap-8 md:gap-12 pb-12 group last:pb-0">
              
              <div className="w-20 md:w-32 shrink-0 pt-1">
                <time className="text-sm font-mono font-bold text-zinc-500 group-hover:text-blue-400 transition-colors">
                  {item.year}
                </time>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-px h-full bg-zinc-800 group-hover:bg-blue-500/50 transition-colors" />
                <div className="absolute top-1 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-700 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>

              <div className="flex-1 pt-0">
                
                <div className="flex items-center gap-3 mb-2">
                   <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all">{item.icon}</span>
                   <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-[55ch]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;