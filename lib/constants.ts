export const SITE_CONFIG = {
  name: "Rimanshu Singh",
  title: "Full-Stack Developer",
  location: "West Bengal, IND",
  email: "rimanshupatel1@gmail.com",
  links: {
    github: "https://github.com/Rimanshu-Singh",
    linkedin: "https://www.linkedin.com/in/rimanshu-singh-246a79245/",
    twitter: "https://x.com/RimanshuSingh0",
    x: "https://x.com/RimanshuSingh0",
    email: "mailto:rimanshupatel1@gmail.com",
    resume: "/resume",
    cal: "", // Set user's cal.com link here if provided
  },
  social: {
    github: "https://github.com/Rimanshu-Singh",
    linkedin: "https://www.linkedin.com/in/rimanshu-singh-246a79245/",
    twitter: "https://x.com/RimanshuSingh0",
    mail: "mailto:rimanshupatel1@gmail.com",
    resume: "/resume",
  },
} as const;

export const CONTACT_LINKS = SITE_CONFIG.links;
export const SOCIAL_LINKS = SITE_CONFIG.social;
export const CONTACT_EMAIL = SITE_CONFIG.email;
