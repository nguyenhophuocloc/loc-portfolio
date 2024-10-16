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
  link: string;
  detail: ProjectDetailJson;
};

export type { ProjectJson, ProjectDetailJson };
