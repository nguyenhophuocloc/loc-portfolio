import { works } from "@/types/mockData";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((item, key) => (
            <ProjectCard key={key} data={item} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
