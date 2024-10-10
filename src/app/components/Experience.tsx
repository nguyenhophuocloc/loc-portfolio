import ExperienceCard from "./ExperienceCard";

const workExperience = [
  {
    title: "Fullstack Developer",
    name: "TechVSI",
    logo: "/images/exp/exp_3.png",
    from: "Jul 2024",
    to: "Present",
    type: "Full-time",
    address: "Ho Chi Minh City, Viet Nam",
    description: `
      <li><strong>Developed</strong> the company's <strong>ERP system</strong> and <strong>official e-commerce website</strong>.</li>
      <li><strong>Collaborated</strong> with <strong>cross-functional teams</strong> to <strong>improve project timelines</strong>.</li>
      <li><strong>Wrote reusable code</strong> that <strong>shortened future development cycles</strong>.</li>
      <li><strong>Reviewed code</strong> and <strong>developed efficient solutions</strong> to <strong>enhance performance</strong> and <strong>reduce load times</strong>.</li>
    `,
  },
  {
    title: "Frontend Developer",
    name: "namperfume",
    logo: "/images/exp/exp_2.jpg",
    from: "Dec 2022",
    to: "Jun 2024",
    type: "Full-time",
    address: "Ho Chi Minh City, Viet Nam",
    description: `
      <li><strong>Developed</strong> the company's <strong>ERP system</strong> and <strong>official e-commerce website</strong>.</li>
      <li><strong>Collaborated</strong> with <strong>cross-functional teams</strong> to <strong>improve project timelines</strong>.</li>
      <li><strong>Wrote reusable code</strong> that <strong>shortened future development cycles</strong>.</li>
      <li><strong>Reviewed code</strong> and <strong>developed efficient solutions</strong> to <strong>enhance performance</strong> and <strong>reduce load times</strong>.</li>
    `,
  },
  {
    title: "Intern Java Developer",
    name: "FPT Software",
    logo: "/images/exp/exp_1.png",
    from: "Jun 2021",
    to: "Aug 2021",
    type: "Full-time",
    address: "Ho Chi Minh City, Viet Nam",
    description: `
      <li><strong>Completed Java Web Developer</strong> training programs and participated in <strong>programming competitions</strong>.</li>
      <li>Collaborated with an <strong>agile team</strong> to achieve tasks assigned by the <strong>team leader</strong>.</li>
    `,
  },
];

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
