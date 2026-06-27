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
  { name: "GitHub Campus Expert", issuer: "GitHub", icon: "★", color: "blue" },
  { name: "Gold Microsoft Learn Student Ambassador", issuer: "Microsoft", icon: "M", color: "coral" },
  { name: "Founder & First Lead, GDSC SZABIST Islamabad", issuer: "Google Developer Student Clubs", icon: "G", color: "mint" },
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", icon: "☁", color: "sun" },
  { name: "Azure Certified", issuer: "Microsoft", icon: "A", color: "violet" }, // VERIFY exact cert name/level
];

export const skills = {
  "cloud & devops": ["Google Cloud Platform", "Microsoft Azure", "CI/CD", "Linux"],
  "languages": ["JavaScript", "Python", "PHP", "SQL"],
  "frameworks & tools": ["React", "Next.js", "FastAPI", "Node.js"],
  "security & community": ["Zero Trust principles", "DevRel / community building", "Public speaking", "Technical mentoring"],
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
  { file: "profile.jpg", caption: "profile photo" },
  { file: "speaking.jpg", caption: "speaking / community event" },
  { file: "hackathon.jpg", caption: "hackathon / GDSC event" },
  { file: "team.jpg", caption: "team / project photo" },
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
