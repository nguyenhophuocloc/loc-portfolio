import { workExperience } from "@/types/mockData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Work Experience</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-1 lg:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))">
          {workExperience.map(
            (
              { title, logo, name, from, to, address, description, type },
              key
            ) => (
              <ExperienceCard
                key={key}
                logo={logo}
                address={address}
                name={name}
                title={title}
                from={from}
                type={type}
                to={to}
                description={description}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
