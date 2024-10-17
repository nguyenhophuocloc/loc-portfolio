"use client";
import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";
import SkillCard from "./SkillCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { listGroupSkill, skillItem } from "@/types/mockData";

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
          {listGroupSkill.map(({ name, value }, key) => (
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
