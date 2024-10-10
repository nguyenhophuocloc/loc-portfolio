"use client";
import { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FilterBtn from "./FilterBtn";

const listGroupCertificate = [
  // { name: "All", value: 0 },
  { name: "freeCodeCamp", value: 1 },
  { name: "Sololearn", value: 2 },
];

const listCertificate = [
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
  },
  {
    title: "Python for Beginners",
    name: "Sololearn",
    date: "Sep 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "Python for Data Science",
    name: "Sololearn",
    date: "Sep 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "PHP",
    name: "Sololearn",
    date: "Aug 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "React + Redux",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "CSS",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "Javascript",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "SQL",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "Java",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "jQuery",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "HTML",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "Responsive Web Design",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    name: "freeCodeCamp",
    date: "Aug 2020",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
  },
  {
    title: "Responsive Web Design",
    name: "freeCodeCamp",
    date: "Mar 2020",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
  },
];

const Certificate = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [certificates, setCertificates] = useState(
    listCertificate.filter((item) => item.type === 1)
  );

  const handleSelected = (value: number) => {
    setSelectedGroup(value);
    if (value === 0) {
      setCertificates(listCertificate);
    } else {
      const newSkills = listCertificate.filter((item) => item.type === value);
      setCertificates(newSkills);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [certificates]);

  return (
    <section className="section" id="certificate">
      <div className="container">
        <h2 className="headline-2 mb-8">Certificate</h2>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {listGroupCertificate.map(({ name, value }, key) => (
            <FilterBtn
              value={value}
              key={key}
              isActive={value === selectedGroup}
              name={name}
              handleSelected={handleSelected}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {certificates.map(({ title, name, date, logo }, key) => (
            <CertificateCard
              title={title}
              logo={logo}
              name={name}
              date={date}
              key={key}
              classes=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
