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
      description: "AI-powered learning assistant...",
      longDescription: "Developed the frontend for the IFRS Knowledge Bot...",
      technologies: ["React", "Node.js", "JavaScript", "HTML/CSS", "OpenAI API"],
      achievements: [
        "Designed and implemented responsive frontend...",
        "Integrated AI-driven Q&A feature...",
      ],
      category: "AI/ML",
      status: "Completed",
      duration: "3 months",
      team: "2 members",
      github: "https://github.com/ChamodTharuka/acca-chatbot-frontend.git",
      demo: "https://ifrsbot.acca.lk/",
      images: ["/images/acca.png"],
    },
    {
      title: "Avyanna Hotel Maldives",
      description: "Modern, responsive hotel website...",
      longDescription: "Built a fully responsive hotel website for Avyanna Maldives...",
      technologies: [
        "WordPress", "PHP", "MySQL", "JavaScript", "HTML5",
        "ACF", "Sass", "SwiftBook", "Google Translate Plugin"
      ],
      achievements: [
        "Integrated SwiftBook for real-time room booking...",
      ],
      category: "Web Development",
      status: "Completed",
      duration: "2 months",
      team: "Solo",
      demo: "https://avyannamaldives.com/",
      images: ["/images/avyanna.png"],
    },
    {
      title: "IEC Sri Lanka Website",
      description: "Professional educational consultancy website...",
      longDescription: "Developed a modern and responsive website for IEC Sri Lanka...",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML5", "ACF", "Sass"],
      achievements: ["Built a responsive and user-friendly consultancy website..."],
      category: "Web Development",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      github: "https://github.com/sandushiUmayanga1916/IEC-Theme.git",
      demo: "https://iec.lk/",
      images: ["/images/iec.png"],
    },
    {
      title: "Seville",
      description: "Modern business website...",
      longDescription: "Designed and developed a sleek and responsive website for Seville...",
      technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "ACF"],
      achievements: ["Delivered a modern, corporate-style website..."],
      category: "Web Development",
      status: "Completed",
      duration: "4 months",
      team: "2 members contributed",
      github: null,
      demo: "https://www.seville.lk/",
      images: ["/images/seville.png"],
    },
    {
      title: "PMF",
      description: "Corporate website for PMF Group...",
      longDescription: "Developed a professional and responsive website for PMF Group...",
      technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "ACF"],
      achievements: ["Delivered a fully responsive, multilingual-ready business website..."],
      category: "Web Development",
      status: "Completed",
      duration: "1.5 months",
      team: "5 members contributed",
      github: null,
      demo: "https://pmf.lk/en/",
      images: ["/images/pmf.png"],
    },
    {
      title: "Brandix Intranet Portal",
      description: "Secure internal intranet system...",
      longDescription: "Developed a secure and responsive intranet portal for Brandix...",
      technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "ACF", "GlobalProtect"],
      achievements: ["Built a secure intranet platform accessible via SASE..."],
      category: "Full-Stack",
      status: "Completed",
      duration: "4 months",
      team: "2 members contributed",
      github: null,
      demo: "Internal Access Only",
      images: ["/images/brandix.png"],
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
