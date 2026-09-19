export interface Project {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  designDirection: string;
  technologies: string[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: "nexa",
    name: "Nexa",
    category: "Mobile App",
    tags: ["Social", "Mobile", "Product"],
    shortDescription:
      "A social communication application designed to connect people through messaging, friendships, stories, profiles, and social interaction.",
    overview:
      "Nexa is a social communication platform built to bring people closer. It combines messaging, social profiles, stories, and friendship networks into a single, modern mobile experience.",
    problem:
      "Existing social platforms often feel cluttered, overwhelming, or impersonal. There is a need for a communication tool that feels direct, clean, and focused on genuine connection.",
    solution:
      "Nexa was designed as a streamlined social experience — combining the immediacy of messaging with the expressiveness of profiles and stories. The interface prioritizes clarity, ease of use, and a modern visual language.",
    features: [
      "Real-time messaging",
      "User profiles with customization",
      "Stories and status updates",
      "Friendship and connection system",
      "Notification management",
      "Modern, intuitive interface",
    ],
    designDirection:
      "Clean, modern, and mobile-first. The design focuses on readability, smooth interactions, and a visual language that feels social without being overwhelming.",
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js"],
    year: "2025",
  },
  {
    slug: "circleup",
    name: "CircleUp",
    category: "Digital Product",
    tags: ["Blockchain", "Finance", "Product"],
    shortDescription:
      "A digital contribution and finance-oriented product exploring blockchain-based community participation and transparent financial coordination.",
    overview:
      "CircleUp explores how blockchain technology can enable transparent, community-driven financial participation. It is a digital product designed around the principles of decentralized contribution and coordinated finance.",
    problem:
      "Traditional financial coordination often lacks transparency. Community contributions, group savings, and shared financial goals can be difficult to manage without a clear, trustless system.",
    solution:
      "CircleUp leverages blockchain-based mechanisms to create transparent contribution systems. Participants can join circles, contribute funds, and track distributions through a verifiable, on-chain process.",
    features: [
      "Community contribution circles",
      "Blockchain-based transparency",
      "Digital wallet integration",
      "Contribution tracking",
      "Distribution management",
      "Secure, decentralized architecture",
    ],
    designDirection:
      "Technical yet approachable. The interface balances the complexity of blockchain-based finance with a clean, understandable user experience that invites participation.",
    technologies: ["Next.js", "TypeScript", "Solidity", "Web3.js"],
    year: "2025",
  },
];
