import EducationCard from "./EducationCard";

const educations = [
  {
    logo: "/images/education_1.png",
    title: "Bachelor of Engineering in Computer Science",
    name: "Ho Chi Minh University of Technology - HCMUT",
    from: 2018,
    to: 2022,
    degree: "Good",
  },
];
const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Education</h2>
        <div className="grid gap-x-4 gap-y-5 max-w-[500px] grid-cols-1 lg:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))">
          {educations.map(({ logo, name, title, from, to, degree }, key) => (
            <EducationCard
              key={key}
              logo={logo}
              name={name}
              title={title}
              from={from}
              to={to}
              degree={degree}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
