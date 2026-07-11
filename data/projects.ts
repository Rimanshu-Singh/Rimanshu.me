import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "escrowx",
    title: "EscrowX",
    description: "A decentralized freelancer marketplace on Stellar. Implements trustless milestone-based escrow via Soroban smart contracts.",
    longDescription: "Architected a full-stack Web3 marketplace on Stellar, implementing trustless milestone-based escrow via Soroban smart contracts, funded by a $160 Stellar Grant.\n\nKey Contributions:\n• Engineered wallet-authenticated fund-locking and on-chain release logic, applying algorithm design for automated milestone validation.\n• Built a scalable, responsive frontend with React.js and Tailwind CSS, integrating REST APIs under modern UI/UX and system design principles.",
    liveLink: "#",
    githubLink: "https://github.com/Rimanshu-Singh",
    image: "/images/obsidianui.png", // reusing existing placeholder images from the workspace
    tags: [
      "React.js",
      "Soroban",
      "Stellar",
      "Tailwind CSS",
      "Web3",
      "Smart Contracts"
    ],
  },
  {
    id: "greengrow",
    title: "GreenGrow",
    description: "AI-Powered Farming Assistant Platform integrating conversational AI and crop disease detection.",
    longDescription: "Led development of a full-stack agricultural advisory platform integrating LLM-based conversational AI, winning 3rd Prize at HackSpire Hackathon.\n\nKey Contributions:\n• Built a REST API-driven Node.js/Express backend with MongoDB persistence and a Flask microservice for TensorFlow/Keras disease-detection inference across 15+ crop diseases.\n• Implemented JWT-secured authentication and a real-time NLP voice assistant, delivering a responsive React/Vite dashboard with live weather and market-price API integrations.",
    liveLink: "#",
    githubLink: "https://github.com/Rimanshu-Singh",
    image: "/images/agenv.png",
    tags: [
      "MERN",
      "Gemini API",
      "Clerk",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Flask",
      "TensorFlow"
    ],
  },
  {
    id: "fitmind-ai",
    title: "FitMind AI",
    description: "Real-time AI-powered wellness voice agent application built on Next.js and Convex.",
    longDescription: "Led a 4-developer team to build a full-stack, real-time wellness platform, winning 1st Place at Hack4Bihar 2025 for Top Innovation among 100+ competing projects.\n\nKey Contributions:\n• Integrated Gemini 2.0 LLM with Vapi and LangChain to power a voice-first AI agent for natural conversation and personalized mood tracking.\n• Engineered real-time sync via Socket.io/WebSockets and Convex, with Clerk authentication and CI/CD-ready deployment on Vercel using Vapi voice pipelines.",
    liveLink: "#",
    githubLink: "https://github.com/Rimanshu-Singh",
    image: "/images/typegpt.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Convex",
      "Gemini 2.0",
      "Vapi",
      "LangChain",
      "Clerk"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
