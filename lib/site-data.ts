export type TeamMember = {
  id: string
  name: string
  designation: string
  image: string
  badge: string
  about: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "roshan",
    name: "Roshan Thapa Magar",
    designation: "Software Developer",
    image: "/images/roshan.png",
    badge: "Developer",
    about:
      "Roshan is a passionate software developer focused on building reliable, scalable, and user-friendly digital solutions.",
  },
  {
    id: "sundar",
    name: "Sundar Thapa Magar",
    designation: "Business Analyst",
    image: "/images/sundar.png",
    badge: "Analyst",
    about:
      "Sundar works on understanding business requirements, analyzing processes, and helping turn ideas into effective solutions.",
  },
  {
    id: "khum",
    name: "Khum Bahadur Thapa Magar",
    designation: "CEO",
    image: "/images/Chairperson.png",
    badge: "CEO",
    about:
      "Sundar works on understanding business requirements, analyzing processes, and helping turn ideas into effective solutions.",
  },
]

export const trustedCompanies: string[] = [
  "TechNova",
  "CloudWorks",
  "DigitalEdge",
  "NextGen",
  "InnovateX",
  "SmartCore",
]

export type Service = {
  id: string
  name: string
  title: string
  description: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    id: "generative-ai",
    name: "Generative AI",
    title: "Build Smarter With Generative AI",
    description:
      "We build intelligent AI solutions that help businesses automate workflows, generate content, analyze information, and create better digital experiences.",
    image: "/images/generative.png",
    features: [
      "AI-powered applications",
      "Intelligent automation",
      "AI assistants & chatbots",
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    title: "Modern Web Experiences That Convert",
    description:
      "We create fast, responsive, and scalable websites that combine modern design with powerful technology to deliver exceptional user experiences.",
    image: "/images/web-development.png",
    features: [
      "Modern responsive websites",
      "High-performance applications",
      "SEO-friendly architecture",
    ],
  },
  {
    id: "software-development",
    name: "Software Development",
    title: "Custom Software Built Around Your Business",
    description:
      "We develop reliable and scalable software solutions designed around your business processes, requirements, and long-term goals.",
    image: "/images/software-development.png",
    features: [
      "Custom business software",
      "Scalable architecture",
      "API & backend development",
    ],
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    title: "Powerful Mobile Applications",
    description:
      "We design and develop intuitive mobile applications that provide smooth experiences across modern mobile platforms.",
    image: "/images/mobile-development.png",
    features: [
      "Cross-platform applications",
      "Modern mobile UI",
      "Secure API integration",
    ],
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    title: "Reliable Infrastructure That Scales",
    description:
      "We help businesses build secure, scalable, and reliable cloud infrastructure with modern DevOps practices and automation.",
    image: "/images/devops-cloud.png",
    features: [
      "Cloud infrastructure",
      "CI/CD automation",
      "Deployment & monitoring",
    ],
  },
  {
    id: "ai-data",
    name: "AI & Data",
    title: "Turn Data Into Better Decisions",
    description:
      "We transform business data into useful insights with analytics, intelligent systems, and modern data technologies.",
    image: "/images/ai-data.png",
    features: [
      "Data analytics",
      "Machine learning solutions",
      "Business intelligence",
    ],
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: "raj-kumar",
    quote:
      "The team understood our requirements quickly and transformed our idea into a clean, reliable, and easy-to-use digital solution. The overall experience was excellent.",
    name: "Raj Kumar",
    role: "Business Owner",
    avatar: "/images/Chairperson.png",
    initials: "RK",
  },
  {
    id: "suman-magar",
    quote:
      "From design to development, everything was handled professionally. They delivered a modern product that helped us improve our workflow and serve our customers better.",
    name: "Bimal Pulami Magar",
    role: "Product Manager",
    avatar: "https://scontent.fpkr3-1.fna.fbcdn.net/v/t39.30808-1/719432708_1002921229322990_173949977174233709_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE8obesDy_1xAlq74SYQE3pIdtTUEC7Xech21NQQLtd5565tI9ghr3lGvE56O3bo-t5IYx8t1AbJFAIIQ0LcTvp&_nc_ohc=h-kqZNPIDsMQ7kNvwGFFLk8&_nc_oc=AdoJVkaweo9uvJ7RYcl9kKU31BR39qsWkVHuaHBws2WjK10K1U9cFU4rlaAGXwTPq3FLS-zMdUxb2NoXJRq4-brm&_nc_zt=24&_nc_ht=scontent.fpkr3-1.fna&_nc_gid=Fmpw4tbKjsfewANr9eGiUQ&_nc_ss=7b2a8&oh=00_AQHsY7ZfjjzV06xH66iy0dEm04PB-2-KJ0I53mlef9fcuw&oe=6A96BEF7",
    initials: "SM",
  },
  {
    id: "anil-sharma",
    quote:
      "Their technical knowledge and communication made the entire project much easier. We received a scalable solution that matched exactly what our business needed.",
    name: "Anil Sharma",
    role: "Founder & CEO",
    avatar: "https://scontent.fpkr3-1.fna.fbcdn.net/v/t39.30808-1/273826824_3025386367702641_5093768607636121628_n.jpg?stp=dst-jpg_tt6&cstp=mx957x960&ctp=s480x480&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFKionLq__6WFlSieWNXvMMDCEbKHXddjUMIRsodd12NZdU34blx2eIgDtG7oBcHiDxX_C4uUQokMeebF7_JFxI&_nc_ohc=5mSXoKOFKagQ7kNvwFw-Kbn&_nc_oc=AdqoJCYCiQmNi3DuSKVHWKCcBaHEWX8cSgwnS2Xt4pIS8nq29tuk6004Li5YAKFP4N6Jq_BsdHESTlxduEavi2yF&_nc_zt=24&_nc_ht=scontent.fpkr3-1.fna&_nc_gid=WXjyGNzp9F1rpqTRmBKD_A&_nc_ss=7b2a8&oh=00_AQEiE9_qzffJUn0r4qU_qQWsnmTK31xBLNFO1J2kBQsaug&oe=6A96D6E4",
    initials: "AS",
  },
]