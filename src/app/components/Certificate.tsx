"use client";
import { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FilterBtn from "./FilterBtn";
import { listCertificate, listGroupCertificate } from "@/types/mockData";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {certificates.map(({ title, name, date, logo, link }, key) => (
            <CertificateCard
              link={link}
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
