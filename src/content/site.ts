/**
 * All copy shown on the portfolio lives here, so content edits never touch layout code.
 */

export type Tool = {
  name: string;
  icon: string;
  /** Icons that are dark-on-transparent need a light tile to stay visible. */
  lightTile?: boolean;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  tools: Tool[];
};

export type Automation = {
  slug: string;
  title: string;
  summary: string;
  /** Steps shown as a node diagram until a real screenshot is added. */
  flow: string[];
  tools: Tool[];
  /** Path to a screenshot of the n8n canvas; leave empty to show the diagram placeholder. */
  image?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year?: string;
  role: string;
  summary: string;
  stack: string[];
  contributions: string[];
  /** Card image. Leave empty to show `flow` as a node-diagram placeholder. */
  thumb?: string;
  flow?: string[];
  images: { title: string; img: string }[];
  /** For automation projects: the individual workflows shown in the dialog. */
  workflows?: Automation[];
  link?: string;
  featured?: boolean;
};

export type Role = {
  company: string;
  logo: string;
  title: string;
  period: string;
  type: string;
  highlights: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  /** Issuer logo; a generic certificate icon is shown when missing. */
  logo?: string;
  date: string;
  /** Verification URL; the row is not clickable when missing. */
  link?: string;
};

const icon = (file: string) => `/images/skill/${file}.svg`;

export const tools = {
  gsc: { name: 'Search Console', icon: icon('google-search-console') },
  ga4: { name: 'GA4', icon: icon('google-analytics-4') },
  ads: { name: 'Google Ads', icon: icon('google-ads') },
  merchant: { name: 'Merchant Center', icon: icon('google-merchant-center') },
  matomo: { name: 'Matomo', icon: icon('matomo') },
  react: { name: 'React', icon: icon('react-js') },
  next: { name: 'Next.js', icon: icon('nextjs') },
  ts: { name: 'TypeScript', icon: icon('typescript') },
  js: { name: 'JavaScript', icon: icon('javascript') },
  tailwind: { name: 'Tailwind CSS', icon: icon('tailwindcss') },
  sass: { name: 'Sass', icon: icon('sass') },
  redux: { name: 'Redux', icon: icon('redux') },
  jquery: { name: 'jQuery', icon: icon('jquery'), lightTile: true },
  wordpress: { name: 'WordPress', icon: icon('wordpress') },
  shopware: { name: 'Shopware', icon: icon('shopware') },
  aem: { name: 'AEM', icon: icon('aem') },
  shopify: { name: 'Shopify', icon: icon('shopify') },
  typo3: { name: 'TYPO3', icon: icon('typo3') },
  php: { name: 'PHP', icon: icon('php') },
  node: { name: 'Node.js', icon: icon('node-js') },
  nest: { name: 'NestJS', icon: icon('nest-js') },
  express: { name: 'Express', icon: icon('expressjs') },
  java: { name: 'Java', icon: icon('java'), lightTile: true },
  mysql: { name: 'MySQL', icon: icon('mysql'), lightTile: true },
  postgres: { name: 'PostgreSQL', icon: icon('postgresql') },
  mongo: { name: 'MongoDB', icon: icon('mongodb') },
  redis: { name: 'Redis', icon: icon('redis') },
  docker: { name: 'Docker', icon: icon('docker') },
  git: { name: 'Git', icon: icon('git') },
  github: { name: 'GitHub', icon: icon('github') },
  gitlab: { name: 'GitLab', icon: icon('gitlab') },
  jest: { name: 'Jest', icon: icon('jest-js') },
  postman: { name: 'Postman', icon: icon('postman') },
  figma: { name: 'Figma', icon: icon('figma') },
  n8n: { name: 'n8n', icon: icon('n8n') },
  claude: { name: 'Claude', icon: icon('claude') },
  gpt: { name: 'GPT', icon: icon('openai') },
  gemini: { name: 'Gemini', icon: icon('gemini') },
} satisfies Record<string, Tool>;

export const profile = {
  name: 'Nguyen Ho Phuoc Loc',
  shortName: 'Loc Nguyen',
  nameAscii: 'Nguyen Ho Phuoc Loc',
  role: 'Web developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'nguyenhophuocloc.cb@gmail.com',
  github: 'https://www.github.com/nguyenhophuocloc/',
  linkedin: 'https://www.linkedin.com/in/nguyen-ho-phuoc-loc/',
  headline: 'Websites, SEO & Everything Behind Them',
  intro:
    'Frontend, backend, WordPress and Shopware, and the technical SEO behind them. Plus n8n and AI automations that keep every site monitored and reported on.',
  availability: 'Open to new roles',
};

/** The hero diagram: one website, layer by layer, from what users see to what runs underneath. */
export const layers: { id: string; label: string; note: string; tools: Tool[] }[] = [
  {
    id: 'seo',
    label: 'Search and tracking',
    note: 'Indexed, measured, compliant',
    tools: [tools.gsc, tools.ga4, tools.ads, tools.merchant],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'Fast, responsive interfaces',
    tools: [tools.react, tools.next, tools.ts, tools.tailwind],
  },
  {
    id: 'cms',
    label: 'CMS and commerce',
    note: 'Sites teams can edit',
    tools: [tools.wordpress, tools.shopware, tools.aem, tools.shopify],
  },
  {
    id: 'backend',
    label: 'Backend and data',
    note: 'APIs, plugins, databases',
    tools: [tools.php, tools.node, tools.mysql, tools.docker],
  },
  {
    id: 'automation',
    label: 'Automation and AI',
    note: 'Monitoring, reports, AI summaries',
    tools: [tools.n8n, tools.claude, tools.gpt, tools.gemini],
  },
];

export const clients: { name: string; logo?: string }[] = [
  { name: 'rapiddweller', logo: '/images/exp/exp_4.png' },
  { name: 'Techcombank', logo: '/images/exp/exp_5.jpg' },
  { name: 'namperfume', logo: '/images/exp/exp_2.jpg' },
  { name: 'TechVSI', logo: '/images/exp/exp_3.png' },
  { name: 'FPT Software', logo: '/images/exp/exp_1.png' },
];

export const services: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    summary: 'Fast, responsive UI from Figma.',
    tools: [tools.react, tools.next, tools.ts, tools.js, tools.tailwind, tools.sass, tools.redux, tools.jquery],
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    summary: 'APIs, plugins and databases.',
    tools: [
      tools.php,
      tools.node,
      tools.nest,
      tools.express,
      // tools.java,
      tools.mysql,
      tools.postgres,
      tools.mongo,
      tools.redis,
    ],
  },
  {
    id: 'cms',
    title: 'CMS and e-commerce',
    summary: 'Sites, themes and plugins teams can edit.',
    tools: [tools.wordpress, tools.shopware, tools.aem, tools.shopify, tools.typo3],
  },
  {
    id: 'seo',
    title: 'Technical SEO and tracking',
    summary: 'Core Web Vitals, indexing and GDPR-safe tracking.',
    tools: [tools.gsc, tools.ga4, tools.ads, tools.merchant, tools.matomo],
  },
  {
    id: 'automation',
    title: 'Automation and AI',
    summary: 'Monitoring workflows with AI summaries.',
    tools: [tools.n8n, tools.claude, tools.gpt, tools.gemini],
  },
  {
    id: 'workflow',
    title: 'Workflow',
    summary: 'Git, CI/CD, containers, testing and handoff.',
    tools: [tools.git, tools.github, tools.gitlab, tools.docker, tools.jest, tools.postman, tools.figma],
  },
];

// TODO(loc): add a screenshot path to `image` for each workflow (blur API keys and client data first).
export const automations: Automation[] = [
  {
    slug: 'uptime',
    title: 'Uptime monitor',
    summary: 'Checks every site on a schedule and raises an alert the moment one goes down or comes back up.',
    flow: ['Schedule', 'Check sites', 'Status changed?', 'Alert'],
    tools: [tools.n8n],
  },
  {
    slug: 'visual-diff',
    title: 'Visual change monitor',
    summary: 'Captures pages, compares them with the last run and has AI summarise what changed in plain language.',
    flow: ['Schedule', 'Capture pages', 'Compare', 'AI summary'],
    tools: [tools.n8n, tools.gemini],
  },
  {
    slug: 'consent',
    title: 'Consent monitor',
    summary: 'Verifies that cookie consent loads and behaves correctly on each site, and flags anything that breaks.',
    flow: ['Schedule', 'Load site', 'Check consent', 'Flag issues'],
    tools: [tools.n8n],
  },
  {
    slug: 'wp-security',
    title: 'WordPress security report',
    summary:
      'Matches installed plugins, themes and core versions against the Wordfence database and WordPress.org, then sends a report.',
    flow: ['Schedule', 'Read versions', 'Match Wordfence', 'Send report'],
    tools: [tools.n8n, tools.wordpress],
  },
];

export const projects: Project[] = [
  {
    slug: 'techcombank',
    title: 'Promotion Hub',
    client: 'Techcombank',
    year: '2024',
    role: 'Web developer',
    summary: 'A new offers section on techcombank.com where customers browse promotions and read each offer in full.',
    stack: ['AEM', 'Java', 'SCSS', 'JavaScript', 'jQuery', 'Jest'],
    contributions: [
      'Built the offer listing and offer detail components in AEM from the approved design.',
      'Connected the components to the new promotions API.',
      'Covered the components with Jest unit tests and wrote the handover documentation.',
    ],
    thumb: '/images/project/tcb/thumb.png',
    images: [
      { title: 'Offer listing', img: '/images/project/tcb/img1.png' },
      { title: 'Offer detail', img: '/images/project/tcb/img2.png' },
    ],
    link: 'https://techcombank.com/khach-hang-ca-nhan/uu-dai',
    featured: true,
  },
  {
    slug: 'monitoring-automations',
    title: 'Website monitoring automations',
    client: 'n8n and AI',
    role: 'Design and build',
    summary:
      'Four n8n workflows that watch websites around the clock: uptime, visual changes, cookie consent and WordPress security, with AI summaries and automatic reports.',
    stack: ['n8n', 'Gemini API', 'Javascript', 'WordPress', 'Docker'],
    contributions: [
      'Designed and built all workflows in n8n.',
      'Used AI to turn raw check results into summaries people can act on.',
      'Set up scheduled runs, alerts and automatic reports.',
    ],
    flow: ['Schedule', 'Run checks', 'AI summary', 'Report'],
    images: [],
    workflows: automations,
  },
  {
    slug: 'namperfume',
    title: 'E-commerce website',
    client: 'namperfume',
    year: '2024',
    role: 'Frontend lead',
    summary: 'The retailer’s online store: search, filters, ordering, online payment and product reviews.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'React Query'],
    contributions: [
      'Led frontend development of the store from mockups to release.',
      'Planned new features with product managers and resolved issues with backend and QA.',
      'Kept the platform fast and stable as the catalogue and traffic grew.',
    ],
    thumb: '/images/project/npf/thumb.png',
    images: [
      { title: 'Home page', img: '/images/project/npf/img1.png' },
      { title: 'Product detail', img: '/images/project/npf/img3.png' },
      { title: 'Collection', img: '/images/project/npf/img2.png' },
      { title: 'Cart', img: '/images/project/npf/img4.png' },
    ],
  },
  {
    slug: 'beme-erp',
    title: 'BEME ERP',
    client: 'namperfume',
    year: '2023',
    role: 'Frontend lead',
    summary:
      'An internal ERP for finance, HR, delivery and customer care, with check-in by camera, location and QR code.',
    stack: ['React', 'TypeScript', 'Ant Design', 'Zustand'],
    contributions: [
      'Wrote the use-case scenarios and designed the frontend architecture.',
      'Implemented the core modules: dashboard, check-in, employees, kanban tasks and orders.',
      'Ran usability tests with staff and fixed the issues they surfaced.',
    ],
    thumb: '/images/project/nteam/img1.jpg',
    images: [
      { title: 'Dashboard', img: '/images/project/nteam/img1.jpg' },
      { title: 'Check-in', img: '/images/project/nteam/img2.jpg' },
      { title: 'Employee list', img: '/images/project/nteam/img3.jpg' },
      { title: 'Kanban board', img: '/images/project/nteam/img4.jpg' },
      { title: 'Task form', img: '/images/project/nteam/img5.jpg' },
      { title: 'Profile', img: '/images/project/nteam/img6.jpg' },
      { title: 'Orders', img: '/images/project/nteam/img7.jpg' },
      { title: 'Order form', img: '/images/project/nteam/img8.jpg' },
    ],
  },
  {
    slug: 'grilli',
    title: 'Grilli',
    client: 'Personal project',
    role: 'Design and build',
    summary: 'A responsive restaurant landing page in plain HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    contributions: ['Designed and built every section by hand, without a framework.'],
    thumb: '/images/project/grilli/thumb.png',
    images: [{ title: 'Home page', img: '/images/project/grilli/img1.png' }],
    link: 'https://nguyenhophuocloc.github.io/grilli-restaurant/',
  },
];

export const experience: Role[] = [
  {
    company: 'rapiddweller',
    logo: '/images/exp/exp_4.png',
    title: 'Web developer',
    period: '2025 – now',
    type: 'Hybrid',
    highlights: [
      'WordPress and Shopware plugins, technical SEO, and GDPR-compliant GA4 and Google Ads tracking.',
      'Core Web Vitals work and full deployments, from staging to go-live.',
    ],
  },
  {
    company: 'TechVSI',
    logo: '/images/exp/exp_3.png',
    title: 'Web developer',
    period: 'Jun – Oct 2024',
    type: 'Contract',
    highlights: ['Maintained and refactored a large enterprise web system, with responsive UI built from Figma.'],
  },
  {
    company: 'namperfume',
    logo: '/images/exp/exp_2.jpg',
    title: 'Frontend developer and project lead',
    period: '2022 – 2024',
    type: 'Full-time',
    highlights: [
      'Led frontend for the company’s ERP and e-commerce website.',
      'Cut page load times by about 30% and built reusable components for later features.',
    ],
  },
  {
    company: 'FPT Software',
    logo: '/images/exp/exp_1.png',
    title: 'Java developer intern',
    period: 'Jun – Aug 2021',
    type: 'Internship',
    highlights: ['Java web training: MVC and RESTful APIs.'],
  },
];

export const education = {
  degree: 'Bachelor of Engineering in Computer Science',
  school: 'Ho Chi Minh City University of Technology',
  logo: '/images/education_1_with_white_core.png',
  period: '2018 – 2022',
};

/** University-run courses: listed first among certificates. */
export const training: Certificate[] = [
  {
    title: 'DevOps Automation with CI/CD',
    issuer: 'Informatics Center, VNU-HCM University of Science',
    logo: '/images/certificate/hcmus-informatics-center.jpg',
    date: 'May 2026',
    link: 'https://media.licdn.com/dms/image/v2/D562DAQGKF9JubgQc8g/profile-treasury-document-cover-images_800/B56Z63hB8XHUBA-/0/1781195351293?e=1794571200&v=beta&t=Am_SeabQe2Qqz7VMTScddGT326M9wTR_pOJETgTq7YA'
  },
];

// Online certificates, newest first. To add one, copy an entry and drop the issuer logo in public/images/certificate/.
export const certificates: Certificate[] = [
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    logo: '/images/certificate/certificate_4.jpg',
    date: 'Feb 2026',
    link: 'https://verify.skilljar.com/c/8i9gr7kqxxw5',
  },
  {
    title: 'WordPress Theme Development',
    issuer: 'Udemy',
    logo: '/images/certificate/certificate_3.png',
    date: 'Jan 2025',
    link: 'https://www.udemy.com/certificate/UC-04f02c0b-eef3-4e01-b8d1-ce153f52c43d/',
  },
  {
    title: 'Back End Development and APIs',
    issuer: 'freeCodeCamp',
    logo: '/images/certificate/certificate_1.jpg',
    date: 'Apr 2024',
    link: 'https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/back-end-development-and-apis',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    logo: '/images/certificate/certificate_1.jpg',
    date: 'Aug 2020',
    link: 'https://www.freecodecamp.org/certification/fcc8cbadbff-75a0-4e5b-b58d-69d5e26ca552/javascript-algorithms-and-data-structures',
  },
];
