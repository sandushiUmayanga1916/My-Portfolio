// src/data/portfolioData.js
export const portfolioData = {
  personal: {
    name: "Sandushi Dissanayake",
    title: "Full-Stack Developer & Software Engineer",
    email: "sandushiumayanga1916@gmail.com",
    phone: "+94 70 172 5432",
    github: "https://github.com/sandushiUmayanga1916",
    linkedin: "https://linkedin.com/in/sandushi-dissanayake", // Update with actual LinkedIn
    location: "Colombo, Sri Lanka",
    resume: "/path-to-your-resume.pdf", // Add your resume link
    image: "/images/image.png",
  },

  about: {
    description:
      "Final-year BEng (Hons) Software Engineering undergraduate at APIIT and Associate Software Engineer at Enfection Pvt Ltd. Passionate about creating innovative digital solutions that blend functionality, performance, and user experience.",
    longDescription:
      "With over 2 years of experience in software development, I specialize in building scalable web applications using modern technologies. My expertise spans across full-stack development, with particular strength in React.js, Node.js, and custom WordPress development. I'm passionate about creating user-centric solutions that not only meet business requirements but also provide exceptional user experiences.",
    highlights: [
      "Full-Stack Development Expertise",
      "Custom WordPress Development",
      "Cloud Services & DevOps",
      "UI/UX Design Implementation",
      "Agile Development Methodologies",
      "Cross-Platform Development",
    ],
    stats: {
      experience: "2+",
      projects: "6+",
      technologies: "10+",
      clients: "8+",
    },
  },

  experience: [
    {
      title: "Associate Software Engineer",
      company: "Enfection Pvt Ltd",
      location: "Colombo, Sri Lanka",
      period: "March 2024 – Present",
      type: "Full-time",
      description:
        "Developed custom WordPress websites, built React applications, and managed cloud hosting environments. Led project coordination and team assignments while ensuring timely delivery of high-quality solutions.",
      achievements: [
        "Built 6+ scalable web applications",
        "Converted 15+ UI designs from Figma/Illustrator into responsive websites",
        "Managed AWS and cPanel hosting environments for 6+ client websites",
        "Coordinated project deliveries and team assignments, improving efficiency by 30%",
        "Implemented custom WordPress themes using PHP, ACF, and Sass",
        "Optimized website performance, achieving 90+ PageSpeed scores",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "WordPress",
        "PHP",
        "AWS",
        "cPanel",
        "Sass",
        "ACF",
      ],
    },
    {
      title: "React Developer Intern",
      company: "Gamage Recruiters Pvt Ltd",
      location: "Colombo, Sri Lanka",
      period: "December 2023 - March 2024",
      type: "Internship",
      description:
        "Contributed to front-end development of the company's career website, focusing on enhancing user experience and implementing responsive design patterns.",
      achievements: [
        "Enhanced career website performance, reducing load time by 40%",
        "Implemented responsive design patterns for mobile-first approach",
        "Collaborated with design team to improve UI/UX workflows",
        "Contributed to component library development using React.js",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Git"],
    },
  ],

  education: [
    {
      degree: "BEng (Hons) Software Engineering",
      institution: "Asia Pacific Institute of Information Technology (APIIT)",
      location: "Colombo, Sri Lanka",
      period: "2021 - 2025",
      status: "Final Year",
      gpa: "3.8/4.0",
      relevantCourses: [
        "Software Architecture & Design",
        "Database Systems",
        "Web Development",
        "Mobile App Development",
        "Machine Learning",
        "Cloud Computing",
      ],
    },
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      location: "Colombo, Sri Lanka",
      period: "2020 - 2023",
      status: "Completed",
      grade: "Distinction",
    },
  ],

  projects: [
    {
      title: "IFRS Knowledge Bot",
      description:
        "AI-powered learning assistant designed for A/L teachers and students to enhance finance education through interactive and intelligent guidance.",
      longDescription:
        "Developed the frontend for the IFRS Knowledge Bot — a smart assistant that supports A/L students and teachers with IFRS-related content. The bot helps students practice finance questions and receive instant feedback, while enabling teachers to access teaching materials and build lesson plans. Built using React and Node.js with seamless integration to the backend AI engine via the OpenAI API.",
      technologies: [
        "React",
        "Node.js",
        "JavaScript",
        "HTML/CSS",
        "OpenAI API",
      ],
      achievements: [
        "Designed and implemented responsive frontend using React and Node.js",
        "Integrated AI-driven Q&A feature with OpenAI API for real-time student support",
        "Improved user engagement with dynamic UI and interactive components",
        "Reduced manual teaching workload by enabling instant access to learning resources",
        "Enabled 24/7 availability of finance education support for 500+ monthly users",
      ],
      category: "AI/ML",
      status: "Completed",
      duration: "3 months",
      team: "2 members",
      github: "https://github.com/ChamodTharuka/acca-chatbot-frontend.git",
      demo: "https://ifrsbot.acca.lk/",
      images: ["public/images/acca.png"],
    },

    {
      title: "Avyanna Hotel Maldives",
      description:
        "Modern, responsive hotel website with third-party booking integration, multilingual support, and custom CMS features built using WordPress and PHP.",
      longDescription:
        "Built a fully responsive hotel website for Avyanna Maldives with an elegant design, third-party booking integration via SwiftBook, and multilingual support using Google Translate plugin. The site offers online room booking, gallery, contact forms, and a custom WordPress backend using ACF for content management. Developed with performance and SEO in mind to ensure a smooth and optimized user experience.",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5",
        "ACF",
        "Sass",
        "SwiftBook",
        "Google Translate Plugin",
      ],
      achievements: [
        "Integrated third-party SwiftBook engine for real-time room booking and availability",
        "Implemented Google Translate plugin for multilingual user experience",
        "Responsive mobile-first design with 98% mobile compatibility score",
        "Custom admin dashboard using ACF for flexible content management",
        "Optimized for SEO and performance with 95+ PageSpeed score",
      ],
      category: "Web Development",
      status: "Completed",
      duration: "2 months",
      team: "Solo",
      demo: "https://avyannamaldives.com/",
      images: ["public/images/avyanna.png"],
    },
    {
      title: "IEC Sri Lanka Website",
      description:
        "Professional educational consultancy website providing information on international programs, universities, and application guidance.",
      longDescription:
        "Developed a modern and responsive website for IEC Sri Lanka, an educational consultancy that helps students explore and apply to international study programs. The site includes course information pages, inquiry forms, contact options, and CMS features powered by WordPress and ACF for easy content updates.",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5",
        "ACF",
        "Sass",
      ],
      achievements: [
        "Built a responsive and user-friendly consultancy website",
        "Implemented course listings and inquiry/contact forms",
        "Used ACF for dynamic content management by non-technical staff",
        "Optimized for SEO and mobile performance",
        "Improved client visibility and student engagement online",
      ],
      category: "Web Development",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      github: "https://github.com/sandushiUmayanga1916/IEC-Theme.git",
      demo: "https://iec.lk/",
      images: ["public/images/iec.png"],
    },
    {
      title: "Seville",
      description:
        "Modern business website for a premier construction company showcasing services, projects, and company profile.",
      longDescription:
        "Designed and developed a sleek and responsive website for Seville, a leading construction and engineering company in Sri Lanka. The site features a professional layout with service overviews, completed project showcases, contact forms, and company information. Built with WordPress and custom ACF fields for easy backend management and scalability.",
      technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "ACF"],
      achievements: [
        "Delivered a modern, corporate-style website with responsive design",
        "Showcased completed projects and services with visual hierarchy",
        "Integrated contact and inquiry forms for client communication",
        "Utilized ACF to provide editable content sections for client",
        "Enhanced brand credibility and online presence for the business",
      ],
      category: "Web Development",
      status: "Completed",
      duration: "4 months",
      team: "2 members contributed",
      github: null,
      demo: "https://www.seville.lk/",
      images: ["public/images/seville.png"],
    },
    {
      title: "PMF",
      description:
        "Corporate website for PMF Group highlighting their services, expertise, and client-focused solutions.",
      longDescription:
        "Developed a professional and responsive website for PMF Group, designed to showcase their corporate services and company values. The site includes service detail sections, company profile, contact forms, and a clean visual layout. Built using WordPress and ACF for easy content updates and ongoing scalability.",
      technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "ACF"],
      achievements: [
        "Delivered a fully responsive, multilingual-ready business website",
        "Created service-oriented pages with clear call-to-actions",
        "Implemented contact and inquiry form for lead generation",
        "Used ACF to allow dynamic and modular content editing",
        "Boosted online visibility and brand trust for PMF Group",
      ],
      category: "Web Development",
      status: "Completed",
      duration: "1.5 months",
      team: "5 members contributed",
      github: null,
      demo: "https://pmf.lk/en/",
      images: ["public/images/pmf.png"],
    },
    {
      title: "Brandix Intranet Portal",
      description:
        "Secure internal intranet system for Brandix employees to access organizational resources, updates, and tools.",
      longDescription:
        "Developed a secure and responsive intranet portal for Brandix, designed to centralize internal communications, company announcements, employee services, and document access. The system is protected via GlobalProtect VPN and is accessible only to authorized users within the Brandix network. Built with a strong focus on performance, usability, and enterprise-level security.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "HTML5",
        "CSS3",
        "ACF",
        "GlobalProtect",
      ],
      achievements: [
        "Built a secure intranet platform accessible via SASE (GlobalProtect VPN)",
        "Implemented internal news, notices, and resource sections for employees",
        "Used ACF for modular and scalable content management by HR and Admin teams",
        "Responsive design ensuring compatibility across devices within the internal network",
        "Improved employee engagement and streamlined access to internal tools",
      ],
      category: "Full-Stack",
      status: "Completed",
      duration: "4 months",
      team: "2 members contributed",
      github: null,
      demo: "Internal Access Only",
      images: ["public/images/brandix.png"],
    },
  ],

  testimonials: [
    {
      name: "John Smith",
      position: "Project Manager",
      company: "Enfection Pvt Ltd",
      content:
        "Sandushi is an exceptional developer who consistently delivers high-quality work. Her attention to detail and problem-solving skills make her a valuable team member.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "UI/UX Designer",
      company: "Gamage Recruiters Pvt Ltd",
      content:
        "Working with Sandushi was a pleasure. She perfectly translated our design concepts into functional, responsive websites. Her technical expertise and collaborative approach made our project a success.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Michael Chen",
      position: "Senior Developer",
      company: "Tech Solutions Inc",
      content:
        "Sandushi's full-stack development skills are impressive. She delivered our e-commerce platform on time and exceeded our expectations. Her code quality and documentation are top-notch.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Owner",
      company: "Digital Innovations Ltd",
      content:
        "Sandushi's ability to understand business requirements and translate them into technical solutions is remarkable. She's proactive, communicative, and always goes the extra mile.",
      rating: 5,
      image: "/images/testimonial-4.jpg",
    },
  ],

  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using modern technologies like React, Node.js, and cloud services.",
      icon: "🚀",
      features: [
        "Custom web applications",
        "API development and integration",
        "Database design and optimization",
        "Cloud deployment and hosting",
        "Performance optimization",
        "Security implementation",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
        "Docker",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress theme and plugin development with modern design and functionality.",
      icon: "🎨",
      features: [
        "Custom theme development",
        "Plugin development",
        "E-commerce solutions",
        "Content management systems",
        "SEO optimization",
        "Performance optimization",
      ],
      technologies: ["WordPress", "PHP", "MySQL", "ACF", "WooCommerce", "Sass"],
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Intelligent applications using computer vision, NLP, and machine learning technologies.",
      icon: "🤖",
      features: [
        "Computer vision applications",
        "Natural language processing",
        "Chatbot development",
        "Predictive analytics",
        "Image recognition systems",
        "Data analysis and visualization",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "NLP",
        "OpenAI API",
      ],
    },
    {
      title: "Cloud & DevOps Services",
      description:
        "Cloud infrastructure setup, deployment automation, and DevOps practices implementation.",
      icon: "☁️",
      features: [
        "AWS cloud deployment",
        "CI/CD pipeline setup",
        "Container orchestration",
        "Infrastructure as Code",
        "Monitoring and logging",
        "Security and compliance",
      ],
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
      ],
    },
  ],

  blog: [
    {
      title: "Building Scalable Microservices with Spring Boot",
      excerpt:
        "Learn how to design and implement microservices architecture using Spring Boot and containerization.",
      date: "2024-05-15",
      readTime: "8 min read",
      category: "Backend Development",
      tags: ["Spring Boot", "Microservices", "Java", "Docker"],
      image: "/images/blog-microservices.jpg",
      slug: "building-scalable-microservices-spring-boot",
    },
    {
      title: "AI-Powered UI Testing: The Future of Quality Assurance",
      excerpt:
        "Exploring how computer vision and LLMs are revolutionizing automated testing methodologies.",
      date: "2024-04-20",
      readTime: "12 min read",
      category: "AI/ML",
      tags: ["AI", "Testing", "Computer Vision", "LLMs"],
      image: "/images/blog-ai-testing.jpg",
      slug: "ai-powered-ui-testing-future-qa",
    },
    {
      title: "React Performance Optimization Techniques",
      excerpt:
        "Essential strategies for optimizing React applications and improving user experience.",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Frontend Development",
      tags: ["React", "Performance", "JavaScript", "Optimization"],
      image: "/images/blog-react-optimization.jpg",
      slug: "react-performance-optimization-techniques",
    },
  ],

  contact: {
    title: "Let's Work Together",
    description:
      "I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.",
    email: "sandushiumayanga1916@gmail.com",
    phone: "+94 70 172 5432",
    location: "Colombo, Sri Lanka",
    availability: "Available for freelance projects",
    responseTime: "24 hours",
    preferredContact: "Email",
    socialLinks: {
      github: "https://github.com/sandushiUmayanga1916",
      linkedin: "https://linkedin.com/in/sandushi-dissanayake",
      instagram: "https://www.instagram.com/sandushidissanayake/",
    },
  },

  seo: {
    title: "Sandushi Dissanayake - Full-Stack Developer & Software Engineer",
    description:
      "Experienced Full-Stack Developer specializing in React.js, Node.js, and WordPress development. Building innovative web solutions in Sri Lanka.",
    keywords: [
      "Full-Stack Developer",
      "React Developer",
      "Node.js Developer",
      "WordPress Developer",
      "Software Engineer",
      "Web Development",
      "Sri Lanka Developer",
      "JavaScript Developer",
      "PHP Developer",
      "AI/ML Developer",
    ],
    author: "Sandushi Dissanayake",
    image: "/images/profile-og.jpg",
    url: "https://sandushi-portfolio.com",
  },
};

export default portfolioData;
