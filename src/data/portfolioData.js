// ============================================================
// EDIT ME: this file holds every piece of text on the site.
// Update names, links, projects, etc. here — components just
// render whatever is in this file.
//
// Items marked "VERIFY" were pulled from public profiles and
// should be double-checked / personalized before going live.
// ============================================================

export const profile = {
  firstName: "Zia Un Nabi J.",
  name: "Muhammad Zia Un Nabi Janjua",
  handle: "iamrlz",
  title: "Cloud Enthusiast, Community Builder & Open-Source Advocate⭐",
  location: "Rawalpindi / Islamabad, Pakistan", // VERIFY
  role: "I build on the cloud, mentor student developers, and lead communities that help people ship their first project.",
  bio: [
    "I'm a cloud-focused developer, open-source advocate, and community builder passionate about cloud infrastructure, security, DevOps, and developer tools. I'm certified in Google Cloud and Microsoft Azure.",
    "I founded and led Google Developer Student Club (GDSC), serve as a GitHub Campus Expert, and recogniz as a Gold Microsoft Student Ambassador, where I organized technical events, mentored students, and helped grow thriving developer communities.",
    "I like building things at the intersection of cloud infrastructure, security, and developer tooling — and helping other students do the same.",
  ],
  quote: "Tech communities grow one person you helped get unstuck at a time.",
  email: "your-email@example.com", // EDIT ME
  resumeUrl: "#", // EDIT ME: link to a hosted PDF resume if you have one
  social: {
    github: "https://github.com/iamrlz",
    linkedin: "https://www.linkedin.com/in/iamrlz/",
    twitter: "https://twitter.com/iamrlz",
    medium: "https://medium.com/@iamrlz",
  },
};

// Shown as the colorful "badge wall" — your real titles & certs,
// displayed like an earned collection. Add/remove freely.
export const achievements = [
  { name: "GitHub Campus Expert", issuer: "GitHub", icon: "🚩", color: "ink-soft" },
  { name: "Gold Microsoft Student Ambassador", issuer: "Microsoft", icon: "🥇", color: "mint" },
  { name: "Google Student Devloper Club Lead (22-23)", issuer: "Google", icon: "🚀", color: "violet" },
  { name: "Microsoft Excel Student Ambassador", issuer: "Microsoft", icon: "⚙️", color: "coral" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", icon: "☁", color: "sun" },
  { name: "Azure Fundamentals", issuer: "Microsoft", icon: "☁", color: "blue" }, 
  { name: "GitHub Foundations", issuer: "GitHub", icon: "🌟", color: "mint-soft" }
];

export const skills = {
  "cloud & devops": ["Google Cloud Platform",
    "Microsoft Azure",
    "Cloud Security",
    "CI/CD",
    "Linux",
    "Networking",
    "Docker"],
  "ai & automation": ["Generative AI", "Prompt Engineering", "AI Agents", "LLMs", "Workflow Automation", "GitHub Copilot"],
  "public sector & digital transformation": ["E-Governance", "Public Sector Technology", "Digital Transformation", "GIS & Geospatial Data", "Field Operations"],
  "open source & community": ["Open Source", "DevRel", "Mentoring", "Public Speaking", "Workshops", "Community Building"],
  "leadership & collaboration": ["Project Management", "Leadership", "Problem Solving", "Communication", "Decision Making", "Strategic Planning"],
};

export const projects = [
  {
    name: "ChatbotShield",
    description:
      "A zero-trust, security-first AI chatbot system. End-to-end encrypted chat (RSA & AES), JWT session management, optional MFA, and role-based access control with an admin dashboard.",
    tech: ["Next.js", "FastAPI", "Python", "JWT", "RBAC"],
    link: "#", // EDIT ME: paste the GitHub repo URL
  },
  {
    name: "Bank Management System",
    description:
      "A bank management system covering account handling and core banking operations, built with a classic HTML/PHP/MySQL stack.",
    tech: ["HTML", "PHP", "MySQL"],
    link: "https://github.com/iamrlz/bank-management-system",
  },
  {
    name: "Your next project",
    description: "Swap this card out — add a project, a one-line pitch, the stack you used, and a link.",
    tech: ["Add", "Your", "Stack"],
    link: "#",
  },
];

export const gallery = [
  // Drop matching image files into /public/images/ — these are just
  // labels + captions, the actual photos are added by you later.
  { file: "Zia Un Nabi Janjua 5.jpg", caption: "workshop / GDSC event" },
  { file: "Zia Un Nabi Janjua 2.JPG", caption: "speaking / TechRise'24 Gilgit" },
  { file: "Zia Un Nabi Janjua 4.JPG", caption: "speaking / Dev Jigra" },
  { file: "Zia Un Nabi Janjua 3.jpg", caption: "hackathon / GDSC event" },
  { file: "Zia Un Nabi Janjua 7.png", caption: "speaking / community event" },
  { file: "Zia Un Nabi Janjua 6.jpg", caption: "hands-on / ZABCON" },
  { file: "Zia Un Nabi Janjua 10.jpg", caption: "MLSA / community event" },
  { file: "Zia Un Nabi Janjua 9.jpg", caption: "GiHub Campus Expert Pose" },
  { file: "Zia Un Nabi Janjua 8.JPG", caption: "KCD / community event" },
  { file: "Zia Un Nabi Janjua 11.png", caption: "team / meeting photo" },
];

export const education = [
  {
    school: "SZABIST University",
    degree: "Bachelor's in Computer Science", // VERIFY
    period: "Graduated", // EDIT ME: add years, e.g. "2021 – 2025"
    notes: "Founded and served as first lead of GDSC SZABIST Islamabad (Google Developer Student Club).",
    color: "blue",
  },
];

export const blogPosts = [
  {
    title: "How to Become a GitHub Campus Expert?",
    date: "Aug 2023",
    excerpt:
      "A walkthrough of the GitHub Campus Expert program — eligibility, the two-phase application, and how to put your community work front and center.",
    link: "https://medium.com/@iamrlz/how-to-become-a-github-campus-expert-73170a2c0c42",
  },
  {
    title: "Your next post",
    date: "draft",
    excerpt: "Swap this out with your latest Medium/Dev.to/Hashnode post — title, date, one-line excerpt, link.",
    link: "#",
  },
];
