"use client";
import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";
import SkillCard from "./SkillCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const listGroup = [
  { name: "All", value: 0 },
  { name: "Language", value: 1 },
  { name: "Frontend", value: 2 },
  { name: "Backend", value: 3 },
  { name: "Database", value: 4 },
  { name: "CMS", value: 5 },
  { name: "Testing", value: 6 },
  { name: "VCS", value: 7 },
  { name: "Others", value: 8 },
];

const skillItem = [
  {
    imgSrc: "/images/skill/html.svg",
    label: "HTML",
    desc: "Language",
    type: 1,
  },
  {
    imgSrc: "/images/skill/css.svg",
    label: "CSS",
    desc: "Language",
    type: 1,
  },
  {
    imgSrc: "/images/skill/javascript.svg",
    label: "JavaScript",
    desc: "Language",
    type: 1,
  },
  {
    imgSrc: "/images/skill/typescript.svg",
    label: "Typescript",
    desc: "Language",
    type: 1,
  },
  {
    imgSrc: "/images/skill/java.svg",
    label: "Java",
    desc: "Language",
    type: 1,
  },
  {
    imgSrc: "/images/skill/react-js.svg",
    label: "React",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/nextjs.svg",
    label: "NextJS",
    desc: "React Framework",
    type: 2,
  },
  {
    imgSrc: "/images/skill/jquery.svg",
    label: "JQuery",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/redux.svg",
    label: "Redux",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/react-query.svg",
    label: "React-query",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/sass.svg",
    label: "Sass",
    desc: "Css preprocessors",
    type: 2,
  },
  {
    imgSrc: "/images/skill/tailwindcss.svg",
    label: "Tailwindcss",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/bootstrap-5.svg",
    label: "Bootstrap",
    desc: "Library",
    type: 2,
  },
  {
    imgSrc: "/images/skill/node-js.svg",
    label: "NodeJS",
    desc: "Web Server",
    type: 3,
  },
  {
    imgSrc: "/images/skill/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
    type: 3,
  },
  {
    imgSrc: "/images/skill/nest-js.svg",
    label: "NestJS",
    desc: "Node Framework",
    type: 3,
  },
  {
    imgSrc: "/images/skill/sequelize.svg",
    label: "Sequelize",
    desc: "Library",
    type: 3,
  },
  {
    imgSrc: "/images/skill/redis.svg",
    label: "Redis",
    desc: "Library",
    type: 4,
  },
  {
    imgSrc: "/images/skill/jest-js.svg",
    label: "Jest",
    desc: "Testing Framework",
    type: 6,
  },
  {
    imgSrc: "/images/skill/aem.svg",
    label: "AEM",
    desc: "CMS",
    type: 5,
  },
  {
    imgSrc: "/images/skill/mysql.svg",
    label: "MySQL",
    desc: "Database",
    type: 4,
  },
  {
    imgSrc: "/images/skill/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
    type: 4,
  },
  {
    imgSrc: "/images/skill/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
    type: 4,
  },
  {
    imgSrc: "/images/skill/docker.svg",
    label: "Docker",
    desc: "Software",
    type: 8,
  },
  {
    imgSrc: "/images/skill/firebase.svg",
    label: "Firebase",
    desc: "Database",
    type: 4,
  },
  {
    imgSrc: "/images/skill/git.svg",
    label: "Git",
    desc: "VCS",
    type: 7,
  },
  {
    imgSrc: "/images/skill/github.svg",
    label: "Github",
    desc: "VCS platform",
    type: 7,
  },
  {
    imgSrc: "/images/skill/gitlab.svg",
    label: "Gitlab",
    desc: "VCS platform",
    type: 7,
  },
  // {
  //   imgSrc: "/images/skill/svn.svg",
  //   label: "SVN",
  //   desc: "VCS",
  //   type: 7,
  // },
  // {
  //   imgSrc: "/images/skill/tortoisesvn.svg",
  //   label: "Tortoise SVN",
  //   desc: "SVN tool",
  //   type: 7,
  // },
  {
    imgSrc: "/images/skill/amazon-workspace.svg",
    label: "Amazon Workspace",
    desc: "VDI",
    type: 8,
  },
  {
    imgSrc: "/images/skill/adobe-xd.svg",
    label: "AdobeXD",
    desc: "Design tool",
    type: 8,
  },
  {
    imgSrc: "/images/skill/figma.svg",
    label: "Figma",
    desc: "Design tool",
    type: 8,
  },
  {
    imgSrc: "/images/skill/vs-code.svg",
    label: "VS code",
    desc: "Code editor",
    type: 8,
  },
  {
    imgSrc: "/images/skill/intellij-idea.svg",
    label: "Intellij IDEA",
    desc: "IDE",
    type: 8,
  },
  {
    imgSrc: "/images/skill/postman.svg",
    label: "Postman",
    desc: "Software",
    type: 8,
  },
];

const Skill = () => {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [skills, setSkills] = useState(skillItem);

  const handleSelected = (value: number) => {
    setSelectedGroup(value);
    if (value === 0) {
      setSkills(skillItem);
    } else {
      const newSkills = skillItem.filter((item) => item.type === value);
      setSkills(newSkills);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [skills]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          {listGroup.map(({ name, value }, key) => (
            <FilterBtn
              value={value}
              key={key}
              isActive={value === selectedGroup}
              name={name}
              handleSelected={handleSelected}
            />
          ))}
        </div>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skills.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              // classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
