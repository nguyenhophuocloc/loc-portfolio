import { ProjectJson } from "./web.type";

export const works: ProjectJson[] = [
  {
    imgSrc: "/images/project-1.jpg",
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
];
