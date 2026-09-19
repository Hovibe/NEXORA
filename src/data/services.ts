export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "app-development",
    number: "01",
    title: "App Development",
    shortDescription:
      "Custom mobile applications designed and developed around real user needs.",
    fullDescription:
      "We design and develop mobile applications that solve real problems. From concept to launch, every app is built with the user in mind — intuitive interfaces, reliable performance, and clean architecture.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design integration",
      "API and backend connectivity",
      "Performance optimization",
      "App store deployment",
    ],
    icon: "Smartphone",
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    shortDescription:
      "Modern, responsive websites and web applications built for performance and usability.",
    fullDescription:
      "We build websites and web applications that load fast, look sharp, and work everywhere. Every project is crafted with clean code, responsive design, and a focus on what the user actually needs.",
    features: [
      "Responsive design",
      "Performance optimization",
      "CMS integration",
      "Progressive web apps",
      "SEO-friendly architecture",
      "Modern frameworks and tools",
    ],
    icon: "Globe",
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    shortDescription:
      "Interfaces and experiences designed to be intuitive, attractive, and functional.",
    fullDescription:
      "Good design is invisible — it just works. We create interfaces that feel natural, look refined, and guide users toward their goals without friction.",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design systems",
      "Interaction design",
      "Usability testing",
      "Design handoff",
    ],
    icon: "Palette",
  },
  {
    id: "graphic-design",
    number: "04",
    title: "Graphic Design",
    shortDescription:
      "Professional visual content for brands, businesses, products, events, and social media.",
    fullDescription:
      "From social media content to print materials, we create visuals that communicate clearly and look professional. Every design serves a purpose.",
    features: [
      "Social media graphics",
      "Marketing materials",
      "Product visuals",
      "Event branding",
      "Print design",
      "Digital content creation",
    ],
    icon: "PenTool",
  },
  {
    id: "branding",
    number: "05",
    title: "Branding",
    shortDescription:
      "Visual identities that help businesses communicate who they are.",
    fullDescription:
      "Your brand is more than a logo. We develop visual identity systems — logos, color palettes, typography, and guidelines — that give businesses a consistent, professional presence.",
    features: [
      "Logo design",
      "Brand guidelines",
      "Color and typography systems",
      "Stationery design",
      "Brand strategy",
      "Visual identity packages",
    ],
    icon: "Diamond",
  },
  {
    id: "software-solutions",
    number: "06",
    title: "Software Solutions",
    shortDescription:
      "Custom software and digital systems built around specific requirements.",
    fullDescription:
      "When off-the-shelf software doesn't fit, we build custom solutions. From internal tools to complex systems, we architect software that solves specific problems efficiently.",
    features: [
      "Custom software development",
      "Desktop applications",
      "System integration",
      "Workflow automation",
      "Legacy system modernization",
      "Technical architecture",
    ],
    icon: "Code",
  },
  {
    id: "ecommerce",
    number: "07",
    title: "E-Commerce",
    shortDescription:
      "Digital storefronts and commerce experiences designed to help businesses sell online.",
    fullDescription:
      "We build online stores that convert visitors into customers. Clean product displays, smooth checkout flows, and reliable payment integration.",
    features: [
      "Custom e-commerce development",
      "Payment gateway integration",
      "Inventory management",
      "Product catalog design",
      "Order processing systems",
      "Mobile commerce",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "api-database",
    number: "08",
    title: "API & Database",
    shortDescription:
      "Reliable technical foundations for applications and digital products.",
    fullDescription:
      "Behind every great application is solid infrastructure. We design and build APIs and databases that are secure, scalable, and maintainable.",
    features: [
      "RESTful API development",
      "GraphQL APIs",
      "Database design and optimization",
      "Authentication systems",
      "Data migration",
      "Performance tuning",
    ],
    icon: "Database",
  },
  {
    id: "technical-consulting",
    number: "09",
    title: "Technical Consulting",
    shortDescription:
      "Technical direction, product planning, architecture, troubleshooting, and digital guidance.",
    fullDescription:
      "Not sure how to approach a technical challenge? We provide consulting services that help businesses and individuals make informed technology decisions.",
    features: [
      "Technical strategy",
      "Product planning",
      "Architecture review",
      "Technology selection",
      "Code audits",
      "Digital transformation guidance",
    ],
    icon: "Lightbulb",
  },
  {
    id: "ai-solutions",
    number: "10",
    title: "AI-Powered Solutions",
    shortDescription:
      "Where appropriate, integrate modern AI capabilities into useful digital products.",
    fullDescription:
      "Artificial intelligence is a tool, not a buzzword. We integrate AI where it genuinely adds value — smarter recommendations, natural language processing, data analysis, and intelligent automation.",
    features: [
      "AI feature integration",
      "Natural language processing",
      "Recommendation systems",
      "Data analysis and insights",
      "Intelligent automation",
      "Machine learning implementation",
    ],
    icon: "Brain",
  },
  {
    id: "maintenance-support",
    number: "11",
    title: "Maintenance & Support",
    shortDescription:
      "Ongoing updates, improvements, troubleshooting, and technical support.",
    fullDescription:
      "A product launch is not the end. We provide ongoing maintenance and support to keep your digital products running smoothly, securely, and up to date.",
    features: [
      "Bug fixes and troubleshooting",
      "Security updates",
      "Performance monitoring",
      "Feature improvements",
      "Technical support",
      "Regular maintenance schedules",
    ],
    icon: "Wrench",
  },
  {
    id: "custom-solutions",
    number: "12",
    title: "Custom Solutions",
    shortDescription:
      "If the client has a technical problem that doesn't fit into a predefined category, Nexora can design a solution around it.",
    fullDescription:
      "Not every problem has a pre-built solution. If you have a unique challenge, we'll design a custom approach — combining the right technologies, strategies, and creative thinking to build what you actually need.",
    features: [
      "Custom project scoping",
      "Multi-technology solutions",
      "Cross-domain integration",
      "Rapid prototyping",
      "Scalable architecture",
      "End-to-end delivery",
    ],
    icon: "Layers",
  },
];
