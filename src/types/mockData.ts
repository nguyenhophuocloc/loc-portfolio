import {
  AboutJson,
  CertificateJson,
  EducationJson,
  ExperienceJson,
  GroupJson,
  ProjectJson,
  SkillJson,
} from "./web.type";

export const works: ProjectJson[] = [
  {
    imgSrc: "/images/project/tcb/img1.png",
    title: "Techcombank Promotion Hub",
    tags: ["Website", "AEM", "Freelancer"],
    from: "08/2024",
    to: "09/2024",
    link: "https://techcombank.com/khach-hang-ca-nhan/uu-dai",
    detail: {
      images: [
        { title: "Offer page", img: "/images/project/tcb/img1.png" },
        { title: "Detail page", img: "/images/project/tcb/img2.png" },
      ],
      description:
        "Developed a new feature for customers to view offer listings and offer details of promotions.",
      techstacks: "AEM, Java, HTML, SCSS, Javascript, JQuery, Jest, Ajax.",
      responsibilities: ` <li>
                Develop the component and UI/UX from design.
              </li>
              <li>
                Integrate new API for new function.
              </li>
              <li>
                Write unit test and document for the the website.
              </li>`,
    },
  },
  {
    imgSrc: "/images/project/npf/img1.png",
    title: "Namperfume Official Website",
    tags: ["Ecommerce", "Nextjs", "Development"],
    from: "12/2023",
    to: "05/2024",
    link: "https://beta.namefragrance.vn/",
    detail: {
      images: [
        { title: "Home page", img: "/images/project/npf/img1.png" },
        { title: "Detail page", img: "/images/project/npf/img3.png" },
        { title: "Collection page", img: "/images/project/npf/img2.png" },
        { title: "Cart page", img: "/images/project/npf/img4.png" },
      ],
      description:
        "Developed a full-featured e-commerce website with core functionalities like search, filters, product ordering, mail notifications, online payments, product reviews, and ratings.",
      techstacks:
        "Next.js, TypeScript, Tailwind CSS, shadcn-ui, Redux Toolkit, React-Query, React Hook Form, Swiper.",
      responsibilities: ` <li>
                Developed and maintained a large-scale e-commerce platform,
                ensuring reliability, security, and performance.
              </li>
              <li>
                Collaborated with cross-functional teams to resolve issues and
                optimize workflows.
              </li>
              <li>
                Implemented UI/UX from mockups, ensuring a seamless user
                experience.
              </li>
              <li>
                Worked with product managers to design innovative features.
              </li>
              <li>
                Focused on building efficient, high-performance, and smooth
                functionality in all systems.
              </li>`,
    },
  },
  {
    imgSrc: "/images/project/nteam/img1.jpg",
    title: "BEME ERP System",
    tags: ["Web Application", "React", "Development"],
    from: "01/2022",
    to: "12/2023",
    detail: {
      images: [
        { title: "Home page", img: "/images/project/nteam/img1.jpg" },
        { title: "Check-in form", img: "/images/project/nteam/img2.jpg" },
        { title: "Employee list", img: "/images/project/nteam/img3.jpg" },
        { title: "Kanban page", img: "/images/project/nteam/img4.jpg" },
        { title: "Task form", img: "/images/project/nteam/img5.jpg" },
        { title: "Profile page", img: "/images/project/nteam/img6.jpg" },
        { title: "Order page", img: "/images/project/nteam/img7.jpg" },
        { title: "Order form", img: "/images/project/nteam/img8.jpg" },
      ],
      description:
        "Developed a full-featured e-commerce website with core functionalities like search, filters, product ordering, mail notifications, online payments, product reviews, and ratings.",
      techstacks:
        "Next.js, TypeScript, Tailwind CSS, shadcn-ui, Redux Toolkit, React-Query, React Hook Form, Swiper.",
      responsibilities: ` <li>
                Developed and maintained a large-scale e-commerce platform,
                ensuring reliability, security, and performance.
              </li>
              <li>
                Collaborated with cross-functional teams to resolve issues and
                optimize workflows.
              </li>
              <li>
                Implemented UI/UX from mockups, ensuring a seamless user
                experience.
              </li>
              <li>
                Worked with product managers to design innovative features.
              </li>
              <li>
                Focused on building efficient, high-performance, and smooth
                functionality in all systems.
              </li>`,
    },
  },
];

export const workExperience: ExperienceJson[] = [
  {
    title: "Fullstack Developer",
    name: "TechVSI",
    logo: "/images/exp/exp_3.png",
    from: "2024",
    to: "Present",
    type: "Full-time",
    address: "Ho Chi Minh City, Viet Nam",
    description: `
      <li><strong>Analyze requirements</strong> and <strong>propose technical solutions</strong>.</li>
      <li><strong>Work collaboratively</strong> with AEM developers to <strong>develop the banking website</strong>.</li>
      <li><strong>Optimize legacy code</strong> for <strong>better performance</strong>.</li>
      <li><strong>Implement UI/UX</strong> from design.</li>
    `,
  },
  {
    title: "Frontend Developer",
    name: "namperfume",
    logo: "/images/exp/exp_2.jpg",
    from: "2022",
    to: "2024",
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
    from: "06/2021",
    to: "08/2021",
    type: "Full-time",
    address: "Ho Chi Minh City, Viet Nam",
    description: `
      <li><strong>Completed Java Web Developer</strong> training programs and participated in <strong>programming competitions</strong>.</li>
      <li>Collaborated with an <strong>agile team</strong> to achieve tasks assigned by the <strong>team leader</strong>.</li>
    `,
  },
];

export const aboutItems: AboutJson[] = [
  // {
  //   label: "Project done",
  //   number: 45,
  // },
  {
    label: "Years of experience",
    number: 2,
  },
];

export const listGroupCertificate: GroupJson[] = [
  // { name: "All", value: 0 },
  { name: "freeCodeCamp", value: 1 },
  { name: "Sololearn", value: 2 },
];

export const listCertificate: CertificateJson[] = [
  {
    title: "Back End Development and APIs",
    name: "freeCodeCamp",
    date: "Apr 2024",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
    link: "https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/back-end-development-and-apis",
  },
  {
    title: "Python for Beginners",
    name: "Sololearn",
    date: "Sep 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-1NY2EVG5",
  },
  {
    title: "Python for Data Science",
    name: "Sololearn",
    date: "Sep 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-FB27BSWO",
  },
  {
    title: "PHP",
    name: "Sololearn",
    date: "Aug 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-G2GO4FNA",
  },
  {
    title: "React + Redux",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-TS7O72BR",
  },
  {
    title: "CSS",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-3BO3VEFF",
  },
  {
    title: "Javascript",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-ILKPZEQS",
  },
  {
    title: "SQL",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-P4BB7PBD",
  },
  {
    title: "Java",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-XQEDTHLS",
  },
  {
    title: "jQuery",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-3HE9N1AY",
  },
  {
    title: "HTML",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-SMWODWIQ",
  },
  {
    title: "Responsive Web Design",
    name: "Sololearn",
    date: "July 2021",
    logo: "/images/certificate/certificate_2.jpg",
    type: 2,
    link: "https://www.sololearn.com/certificates/CT-GBQKA70U",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    name: "freeCodeCamp",
    date: "Aug 2020",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
    link: "https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    name: "freeCodeCamp",
    date: "Mar 2020",
    logo: "/images/certificate/certificate_1.jpg",
    type: 1,
    link: "https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/responsive-web-design",
  },
];

export const educations: EducationJson[] = [
  {
    logo: "/images/education_1.png",
    title: "Bachelor of Engineering in Computer Science",
    name: "Ho Chi Minh University of Technology - HCMUT",
    from: 2018,
    to: 2022,
    degree: "Good",
  },
];

export const listGroupSkill: GroupJson[] = [
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

export const skillItem: SkillJson[] = [
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
