import {
  AboutJson,
  CertificateJson,
  EducationJson,
  ExperienceJson,
  GroupJson,
  ProjectJson,
  SkillJson,
  SocialJson,
} from './web.type';

export const works: ProjectJson[] = [
  {
    imgSrc: '/images/project/tcb/thumb.png',
    title: 'Techcombank Promotion Hub',
    tags: ['Website', 'AEM', 'Development'],
    from: '08/2024',
    to: '09/2024',
    link: 'https://techcombank.com/khach-hang-ca-nhan/uu-dai',
    detail: {
      images: [
        { title: 'Offer page', img: '/images/project/tcb/img1.png' },
        { title: 'Detail page', img: '/images/project/tcb/img2.png' },
      ],
      description:
        'Developed a new feature for customers to view offer listings and offer details of promotions.',
      techstacks: 'AEM, Java, HTML, SCSS, Javascript, JQuery, Jest, Ajax.',
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
    imgSrc: '/images/project/npf/thumb.png',
    title: 'Namperfume Official Website',
    tags: ['Ecommerce', 'Nextjs', 'Development'],
    from: '01/2024',
    to: '06/2024',
    link: 'https://beta.namefragrance.vn/',
    detail: {
      images: [
        { title: 'Home page', img: '/images/project/npf/img1.png' },
        { title: 'Detail page', img: '/images/project/npf/img3.png' },
        { title: 'Collection page', img: '/images/project/npf/img2.png' },
        { title: 'Cart page', img: '/images/project/npf/img4.png' },
      ],
      description:
        'Developed a full-featured e-commerce website with core functionalities like search, filters, product ordering, mail notifications, online payments, product reviews, and ratings.',
      techstacks:
        'Next.js, TypeScript, Tailwind CSS, shadcn-ui, Redux Toolkit, React-Query, React Hook Form, Swiper.',
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
    imgSrc: '/images/project/nteam/img1.jpg',
    title: 'BEME ERP System',
    tags: ['Web Application', 'React', 'Development'],
    from: '01/2023',
    to: '12/2023',
    detail: {
      images: [
        { title: 'Home page', img: '/images/project/nteam/img1.jpg' },
        { title: 'Check-in form', img: '/images/project/nteam/img2.jpg' },
        { title: 'Employee list', img: '/images/project/nteam/img3.jpg' },
        { title: 'Kanban page', img: '/images/project/nteam/img4.jpg' },
        { title: 'Task form', img: '/images/project/nteam/img5.jpg' },
        { title: 'Profile page', img: '/images/project/nteam/img6.jpg' },
        { title: 'Order page', img: '/images/project/nteam/img7.jpg' },
        { title: 'Order form', img: '/images/project/nteam/img8.jpg' },
      ],
      description:
        ' Developed an ERP system for enterprises to streamline resource planning, integrating and digitizing processes across finance, HR, delivery, and customer care departments.',
      techstacks:
        ' ReactJs, Typescript, Antdesign, Tailwindcss, zustand, react-kanban, react-webcam, react-geolocated, react-qr-barcode-scanner.',
      responsibilities: ` <li>
               Designed use-case scenarios and developed the software architecture.
              </li>
              <li>
                Balanced functional requirements with aesthetic UI/UX designs.
              </li>
              <li>
                Implemented core features on the front-end.
              </li>
              <li>
                Conducted ongoing usability tests and addressed bugs to ensure system stability
              </li>`,
    },
  },
  {
    imgSrc: '/images/project/netflix/thumb.png',
    title: 'Netflix clone',
    tags: ['MERN', 'PetProject', 'Development'],
    link: 'https://netflix-clone-production-0ddd.up.railway.app/',
    from: '',
    to: '',
    detail: {
      images: [
        { title: 'Home page', img: '/images/project/netflix/thumb.png' },
        { title: 'Watch page', img: '/images/project/netflix/img1.png' },
        { title: 'Search movie page', img: '/images/project/netflix/img2.png' },
        {
          title: 'Search person page',
          img: '/images/project/netflix/img3.png',
        },
        {
          title: 'Search history page',
          img: '/images/project/netflix/img4.png',
        },
      ],
      description:
        'A feature-rich Netflix clone with JWT authentication, providing a responsive UI that adapts seamlessly to all devices. Users can browse movies and TV shows, search for actors and movies, and even watch trailers. The app includes search history tracking and suggestions for similar movies/TV shows, offering an immersive streaming-like experience.',
      techstacks:
        'React.js, Node.js, Express.js, MongoDB, Tailwind, Zustand, MongoDB',
      account: { username: 'john@gmail.com', password: '123456' },
      responsibilities: '',
    },
  },
  {
    imgSrc: '/images/project/grilli/thumb.png',
    title: 'Grilli Restaurant',
    tags: ['LandingPage', 'PetProject', 'Development'],
    link: 'https://nguyenhophuocloc.github.io/grilli-restaurant/',
    from: '',
    to: '',
    detail: {
      images: [{ title: 'Home page', img: '/images/project/grilli/img1.png' }],
      description:
        'Grilli is a fully responsive restaurant website, responsive for all devices, build using HTML, CSS, and JavaScript.',
      techstacks: 'HTML, CSS, Javascript.',
      responsibilities: '',
    },
  },
];

export const workExperience: ExperienceJson[] = [
  {
    title: 'Web Developer',
    name: 'rapiddweller',
    logo: '/images/exp/exp_4.png',
    from: '2025',
    to: 'Present',
    type: 'Hybrid',
    address: 'Ho Chi Minh City, Viet Nam',
    description: `
      <li><strong>Built custom plugins</strong> for WordPress and Shopware, and <strong>updated website UI and content</strong> based on SEO and content team feedback.</li>
      <li><strong>Integrated SEO tools (GA4, Google Ads, etc.)</strong> to improve search visibility and track marketing performance.</li>
      <li><strong>Implemented GDPR-compliant tracking setups</strong> using cookie consent tools and anonymized analytics where required.</li>
      <li><strong>Optimized site speed and Core Web Vitals</strong> using caching strategies, lazy loading, and PageSpeed Insights.</li>
      <li><strong>Handled full-site deployments</strong> from staging setup and data migration to go-live and post-launch maintenance, upgrades, and technical optimizations.</li>
    `,
  },
  {
    title: 'Web Developer',
    name: 'TechVSI',
    logo: '/images/exp/exp_3.png',
    from: '06/2024',
    to: '10/2024',
    type: 'Full-time',
    address: 'Ho Chi Minh City, Viet Nam',
    description: `
      <li><strong>Worked directly with the client’s development team</strong> to maintain and enhance a large-scale enterprise web system.</li>
      <li><strong>Analyzed functional requirements</strong> and proposed <strong>technical solutions</strong> based on client inputs and internal PM directives.</li>
      <li><strong>Refactored legacy code</strong> to improve <strong>performance</strong>, <strong>readability</strong>, and <strong>maintainability</strong>.</li>
      <li><strong>Implemented responsive UI</strong> from Figma designs, ensuring <strong>pixel-perfect</strong> layouts and consistent cross-browser experience.</li>
    `,
  },
  {
    title: 'Frontend Team Lead',
    name: 'namperfume',
    logo: '/images/exp/exp_2.jpg',
    from: '2022',
    to: '2024',
    type: 'Full-time',
    address: 'Ho Chi Minh City, Viet Nam',
    description: `
      <li><strong>Led frontend development</strong> for the company’s <strong>ERP system</strong> and <strong>official e-commerce website</strong>, ensuring responsive UI and performance optimization.</li>
      <li><strong>Collaborated with backend, design, and QA teams</strong> to streamline workflows and <strong>improve delivery timelines</strong>.</li>
      <li><strong>Built and maintained reusable components</strong>, reducing duplication and <strong>accelerating future development cycles</strong>.</li>
      <li><strong>Reviewed pull requests</strong> and implemented <strong>performance-focused solutions</strong> to enhance speed and <strong>reduce page load times</strong> by ~30%.</li>
    `,
  },
  {
    title: 'Intern Java Developer',
    name: 'FPT Software',
    logo: '/images/exp/exp_1.png',
    from: '06/2021',
    to: '08/2021',
    type: 'Full-time',
    address: 'Ho Chi Minh City, Viet Nam',
    description: `
      <li><strong>Completed intensive Java Web Development training</strong> focused on <strong>backend fundamentals</strong>, <strong>MVC</strong>, and <strong>RESTful APIs</strong>.</li>
      <li><strong>Joined internal coding challenges</strong>, demonstrating <strong>strong problem-solving</strong> and <strong>solid algorithmic thinking</strong>.</li>
      <li><strong>Worked in an agile team</strong> to complete tasks under the mentorship of <strong>senior developers</strong>.</li>
    `,
  },
];

export const aboutItems: AboutJson[] = [
  // {
  //   label: "Project done",
  //   number: 45,
  // },
  {
    label: 'Years of experience',
    number: 3,
  },
];

export const listGroupCertificate: GroupJson[] = [
  // { name: "All", value: 0 },
  { name: 'freeCodeCamp', value: 1 },
  { name: 'Udemy', value: 3 },
  { name: 'Sololearn', value: 2 },
];

export const listCertificate: CertificateJson[] = [
  {
    title: 'WordPress Theme Development',
    name: 'Udemy',
    date: 'Jan 2025',
    logo: '/images/certificate/certificate_3.png',
    type: 3,
    link: 'https://www.udemy.com/certificate/UC-04f02c0b-eef3-4e01-b8d1-ce153f52c43d/',
  },
  {
    title: 'Back End Development and APIs',
    name: 'freeCodeCamp',
    date: 'Apr 2024',
    logo: '/images/certificate/certificate_1.jpg',
    type: 1,
    link: 'https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/back-end-development-and-apis',
  },
  {
    title: 'Python for Beginners',
    name: 'Sololearn',
    date: 'Sep 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-1NY2EVG5',
  },
  {
    title: 'Python for Data Science',
    name: 'Sololearn',
    date: 'Sep 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-FB27BSWO',
  },
  {
    title: 'PHP',
    name: 'Sololearn',
    date: 'Aug 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-G2GO4FNA',
  },
  {
    title: 'React + Redux',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-TS7O72BR',
  },
  {
    title: 'CSS',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-3BO3VEFF',
  },
  {
    title: 'Javascript',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-ILKPZEQS',
  },
  {
    title: 'SQL',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-P4BB7PBD',
  },
  {
    title: 'Java',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-XQEDTHLS',
  },
  {
    title: 'jQuery',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-3HE9N1AY',
  },
  {
    title: 'HTML',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-SMWODWIQ',
  },
  {
    title: 'Responsive Web Design',
    name: 'Sololearn',
    date: 'July 2021',
    logo: '/images/certificate/certificate_2.jpg',
    type: 2,
    link: 'https://www.sololearn.com/certificates/CT-GBQKA70U',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    name: 'freeCodeCamp',
    date: 'Aug 2020',
    logo: '/images/certificate/certificate_1.jpg',
    type: 1,
    link: 'https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/javascript-algorithms-and-data-structures',
  },
  {
    title: 'Responsive Web Design',
    name: 'freeCodeCamp',
    date: 'Mar 2020',
    logo: '/images/certificate/certificate_1.jpg',
    type: 1,
    link: 'https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/responsive-web-design',
  },
];

export const educations: EducationJson[] = [
  {
    logo: '/images/education_1.png',
    title: 'Bachelor of Engineering in Computer Science',
    name: 'Ho Chi Minh University of Technology - HCMUT',
    from: 2018,
    to: 2022,
    degree: 'Good',
  },
];

export const listGroupSkill: GroupJson[] = [
  { name: 'All', value: 0 },
  { name: 'Language', value: 1 },
  { name: 'Frontend', value: 2 },
  { name: 'Backend', value: 3 },
  { name: 'Database', value: 4 },
  { name: 'CMS', value: 5 },
  { name: 'Testing', value: 6 },
  { name: 'VCS', value: 7 },
  { name: 'Others', value: 8 },
];

export const skillItem: SkillJson[] = [
  {
    imgSrc: '/images/skill/html.svg',
    label: 'HTML',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/css.svg',
    label: 'CSS',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/javascript.svg',
    label: 'JavaScript',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/typescript.svg',
    label: 'Typescript',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/java.svg',
    label: 'Java',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/php.svg',
    label: 'PHP',
    desc: 'Language',
    type: 1,
  },
  {
    imgSrc: '/images/skill/react-js.svg',
    label: 'React',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/nextjs.svg',
    label: 'NextJS',
    desc: 'React Framework',
    type: 2,
  },
  {
    imgSrc: '/images/skill/jquery.svg',
    label: 'JQuery',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/redux.svg',
    label: 'Redux',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/react-query.svg',
    label: 'React-query',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/sass.svg',
    label: 'Sass',
    desc: 'Css preprocessors',
    type: 2,
  },
  {
    imgSrc: '/images/skill/tailwindcss.svg',
    label: 'Tailwindcss',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/bootstrap-5.svg',
    label: 'Bootstrap',
    desc: 'Library',
    type: 2,
  },
  {
    imgSrc: '/images/skill/node-js.svg',
    label: 'NodeJS',
    desc: 'Web Server',
    type: 3,
  },
  {
    imgSrc: '/images/skill/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
    type: 3,
  },
  {
    imgSrc: '/images/skill/nest-js.svg',
    label: 'NestJS',
    desc: 'Node Framework',
    type: 3,
  },
  {
    imgSrc: '/images/skill/sequelize.svg',
    label: 'Sequelize',
    desc: 'Library',
    type: 3,
  },
  {
    imgSrc: '/images/skill/redis.svg',
    label: 'Redis',
    desc: 'Library',
    type: 4,
  },
  {
    imgSrc: '/images/skill/jest-js.svg',
    label: 'Jest',
    desc: 'Testing Framework',
    type: 6,
  },
  {
    imgSrc: '/images/skill/wordpress.svg',
    label: 'Wordpress',
    desc: 'CMS',
    type: 5,
  },
  {
    imgSrc: '/images/skill/aem.svg',
    label: 'AEM',
    desc: 'CMS',
    type: 5,
  },
  {
    imgSrc: '/images/skill/shopware.svg',
    label: 'Shopware',
    desc: 'CMS',
    type: 5,
  },
  {
    imgSrc: '/images/skill/shopify.svg',
    label: 'Shopify',
    desc: 'CMS',
    type: 5,
  },
  {
    imgSrc: '/images/skill/mysql.svg',
    label: 'MySQL',
    desc: 'Database',
    type: 4,
  },
  {
    imgSrc: '/images/skill/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
    type: 4,
  },
  {
    imgSrc: '/images/skill/postgresql.svg',
    label: 'PostgreSQL',
    desc: 'Database',
    type: 4,
  },
  {
    imgSrc: '/images/skill/docker.svg',
    label: 'Docker',
    desc: 'Software',
    type: 8,
  },
  {
    imgSrc: '/images/skill/firebase.svg',
    label: 'Firebase',
    desc: 'Database',
    type: 4,
  },
  {
    imgSrc: '/images/skill/git.svg',
    label: 'Git',
    desc: 'VCS',
    type: 7,
  },
  {
    imgSrc: '/images/skill/github.svg',
    label: 'Github',
    desc: 'VCS platform',
    type: 7,
  },
  {
    imgSrc: '/images/skill/gitlab.svg',
    label: 'Gitlab',
    desc: 'VCS platform',
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
    imgSrc: '/images/skill/amazon-workspace.svg',
    label: 'Amazon Workspace',
    desc: 'VDI',
    type: 8,
  },
  {
    imgSrc: '/images/skill/adobe-xd.svg',
    label: 'AdobeXD',
    desc: 'Design tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/figma.svg',
    label: 'Figma',
    desc: 'Design tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/vs-code.svg',
    label: 'VS code',
    desc: 'Code editor',
    type: 8,
  },
  {
    imgSrc: '/images/skill/intellij-idea.svg',
    label: 'Intellij IDEA',
    desc: 'IDE',
    type: 8,
  },
  {
    imgSrc: '/images/skill/postman.svg',
    label: 'Postman',
    desc: 'Software',
    type: 8,
  },
  {
    imgSrc: '/images/skill/google-search-console.svg',
    label: 'Google Search Console',
    desc: 'SEO tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/google-analytics-4.svg',
    label: 'GA 4',
    desc: 'SEO tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/google-ads.svg',
    label: 'Google Ads',
    desc: 'SEO tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/google-merchant-center.svg',
    label: 'Merchant Center',
    desc: 'SEO tool',
    type: 8,
  },
  {
    imgSrc: '/images/skill/matomo.svg',
    label: 'Matomo',
    desc: 'SEO tool',
    type: 8,
  },
];

export const socialLinks: SocialJson[] = [
  {
    href: 'https://www.github.com/nguyenhophuocloc',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nguyen-ho-phuoc-loc',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: 'LinkedIn',
  },
  // {
  //   href: "https://x.com/codewithsadee_",
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z"
  //         fill="currentColor"
  //       />
  //     </svg>
  //   ),
  //   alt: "Twitter X",
  // },
  // {
  //   href: "https://www.instagram.com/codewithsadee",
  //   icon: (
  //     <svg
  //       width="25"
  //       height="24"
  //       viewBox="0 0 25 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z"
  //         fill="currentColor"
  //       />
  //     </svg>
  //   ),
  //   alt: "Instagram",
  // },
];
