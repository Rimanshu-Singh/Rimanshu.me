import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "fitmind-ai",
    number: "01",
    title: "FitMind AI",
    tagline: "AI Voice Fitness & Wellness Platform",
    badge: "1st Place · Hack4Bihar 2025",
    description: "A voice-first AI fitness platform that creates personalized workout and meal plans through natural conversation, with real-time user data, authentication, plan history, and AI-powered recommendations.",
    longDescription: "The repository describes Next.js/Tailwind on the frontend, Convex and Clerk for backend/auth, Gemini/GPT with LangChain for AI, plus Whisper, ElevenLabs and Vapi for the voice workflow.",
    highlights: [
      "Voice-based AI onboarding and interaction",
      "Personalized workout & meal-plan generation",
      "Real-time dashboard and user data with Convex",
      "1st Place — Hack4Bihar 2025"
    ],
    liveLink: "https://github.com/Rimanshu-Singh/FitMind_Ai",
    githubLink: "https://github.com/Rimanshu-Singh/FitMind_Ai",
    image: "/images/obsidianui.png",
    gradient: "from-white via-lime-400 to-slate-950",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Gemini",
      "LangChain",
      "Vapi",
      "Whisper",
      "ElevenLabs"
    ],
    mainTags: ["Next.js", "TypeScript", "Convex", "Gemini", "Vapi"],
  },
  {
    id: "escrowx",
    number: "02",
    title: "EscrowX",
    tagline: "Decentralized Freelance Escrow on Stellar",
    badge: "Stellar Grant · Web3",
    description: "A full-stack freelance marketplace with milestone-based escrow, where funds are locked and settled through Stellar Soroban smart contracts with wallet-signed transactions, dispute handling, and role-based workflows.",
    longDescription: "EscrowX has a React/TypeScript frontend, Node.js/Express backend, MongoDB, Freighter integration, Stellar Testnet and Soroban smart contracts. Its repository documents wallet signing, on-chain execution, contract-state synchronization and a full escrow state machine. The project README also documents 50+ test users, CI/CD and a deployed application.",
    highlights: [
      "Complete Client → Freelancer → Escrow workflow",
      "On-chain fund locking and milestone payments",
      "Freighter wallet signing + Soroban contract integration",
      "Dispute/refund lifecycle",
      "50+ test users & $160 Stellar Grant"
    ],
    liveLink: "https://github.com/Rimanshu-Singh/EscrowX",
    githubLink: "https://github.com/Rimanshu-Singh/EscrowX",
    image: "/images/typegpt.png",
    gradient: "from-white via-rose-400 to-slate-950",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stellar",
      "Soroban",
      "Freighter",
      "Web3"
    ],
    mainTags: ["React", "TypeScript", "Node.js", "MongoDB", "Stellar Soroban"],
  },
  {
    id: "greengrow",
    number: "03",
    title: "GreenGrow",
    tagline: "AI-Powered Agricultural Intelligence Platform",
    badge: "3rd Prize · HackSpire",
    description: "A full-stack AI farming platform combining conversational assistance, crop-disease detection, voice interaction, weather intelligence, and real-time agricultural market data to help farmers make better decisions.",
    longDescription: "GreenGrow includes React/TypeScript/Vite/Tailwind on the frontend, Node.js/Express/MongoDB on the backend, and a separate Flask + TensorFlow/Keras ML service. It also integrates Gemini 2.0 Flash, Vapi, OpenWeatherMap and agricultural market APIs.",
    highlights: [
      "AI farming assistant with contextual conversations",
      "TensorFlow crop-disease detection for 15+ diseases",
      "Gemini-powered image and text analysis",
      "Real-time voice assistant",
      "Weather forecasts and mandi-price intelligence",
      "3rd Prize — HackSpire"
    ],
    liveLink: "https://green-grow-zeta.vercel.app/",
    githubLink: "https://github.com/Rimanshu-Singh/GreenGrow_v3",
    image: "/images/agenv.png",
    gradient: "from-white via-orange-400 to-slate-950",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Flask",
      "TensorFlow",
      "Gemini",
      "Vapi",
      "Tailwind CSS"
    ],
    mainTags: ["React", "Node.js", "MongoDB", "TensorFlow", "Gemini"],
  },
  {
    id: "privora",
    number: "04",
    title: "Privora",
    tagline: "Zero-Knowledge Access Layer on Midnight",
    badge: "Zero-Knowledge · Midnight",
    description: "A reusable privacy-preserving authorization protocol that lets users prove membership or access eligibility without revealing their identity or underlying credential.",
    longDescription: "The live application describes Privora as a reusable zero-knowledge credential primitive where applications receive only a verified result while the raw credential stays private. The repository uses Next.js + TypeScript, Compact smart contracts, Midnight runtime/contract SDKs, wallet connectors, Jest and GitHub Actions.",
    highlights: [
      "Zero-Knowledge credential verification",
      "Merkle-tree based private allowlists",
      "Nullifier-based replay protection",
      "Lace & 1AM wallet integration",
      "Compact smart contracts deployed on Midnight Preprod",
      "Automated contract testing and CI/CD"
    ],
    liveLink: "https://privora-new.vercel.app/",
    githubLink: "https://github.com/Rimanshu-Singh/Privora",
    image: "/images/codedevs.png",
    gradient: "from-white via-sky-400 to-slate-950",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Compact",
      "Midnight",
      "Zero-Knowledge",
      "Lace Wallet",
      "Jest",
      "GitHub Actions"
    ],
    mainTags: ["Next.js", "TypeScript", "Midnight", "Compact", "Zero-Knowledge"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
