import { ReactNode } from "react";

type ProjectDetailJson = {
  images: { title: string; img: string }[];
  description: string;
  techstacks: string;
  responsibilities: string;
};

type ProjectJson = {
  imgSrc: string;
  title: string;
  tags: string[];
  from: string;
  to: string;
  link?: string;
  detail: ProjectDetailJson;
};

type ExperienceJson = {
  title: string;
  name: string;
  logo: string;
  from: string;
  to: string;
  type: string;
  address: string;
  description: string;
};

type AboutJson = {
  label: string;
  number: number;
};

type GroupJson = {
  name: string;
  value: number;
};

type CertificateJson = {
  title: string;
  name: string;
  date: string;
  logo: string;
  type: number;
};

type EducationJson = {
  logo: string;
  title: string;
  name: string;
  from: number;
  to: number;
  degree: string;
};

type SkillJson = {
  imgSrc: string;
  label: string;
  desc: string;
  type: number;
};

type SocialJson = {
  href: string;
  icon: ReactNode;
  alt: string;
};

export type {
  ProjectJson,
  ProjectDetailJson,
  ExperienceJson,
  AboutJson,
  GroupJson,
  CertificateJson,
  EducationJson,
  SkillJson,
  SocialJson,
};
