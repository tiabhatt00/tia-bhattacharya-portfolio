export interface Experience {
    company: string;
    position: string;
    description: string;
    skills: string[];
  }
  
  export const experiences: Experience[] = [
    {
      company: "Appen AI",
      position: "Software Engineer, Full Stack",
      description: `Upgraded Spring Boot microservices in Java, resulting in a 76% boost in performance and AWS ECS optimization.
      Migrated 2 million+ active global users to the new Appen Connect platform, resulting in improved user experience, strengthened fraud detection, and higher quality of customers’ LLM training data.
      Developed shared components in React and enhanced APIs in Java for various user flows, improving crowd experience and engagement with data annotation tasks. 
      Designed and developed new frontend app architecture with React and AWS Amplify while migrating to a monorepo, simplifying app deployments and improving app metrics.
      Delivered improvements on high-impact features and mission-critical bug fixes, retaining legacy users and boosting trust in the company.`,
      skills: ["Java 17", "Java 8", "Spring Boot", "React", "Redux", "PostgreSQL", "MySQL"]
    },
    {
      company: "Castlight Health",
      position: "Software Engineer Intern",
      description: `Built components in Angular, contributing to the Shared UI library and improving user experience for Castlight’s healthcare navigation tool.
      Collaborated in an Agile environment, integrating feedback in code reviews, addressing critical issues in bug reports, and deploying upgraded features with Jenkins.`,
      skills: ["Angular Ionic", "Node.js"]
    },
    {
      company: "Tech4Good",
      position: "Full Stack Developer & Research Lead",
      description: `Built and deployed a scheduling tool in Angular, integrating dynamic course meeting data for 1,400+ courses at UCSC. Engineered research consent management feature, securely transferring data to Firebase and enabling 1000+ students to participate in a research study.
      Identified and fixed major data structure issues, optimizing event handling and database entities with observables and selectors in Angular, enhancing data reliability and application performance.
      Managed a 10-person UI engineering team, delivering training in JavaScript and producing six high-fidelity interfaces.`,
      skills: ["Angular", "TypeScript", "Firebase"]
    },
    {
      company: "StuDev",
      position: "Software Engineer Intern",
      description: `Led the design and development of a gifting service application, utilizing Angular for frontend and MongoDB for the database.
      Architected MongoDB database and RESTful Node.js APIs to store user information and track gifting interactions, facilitating efficient communication between services.`,
      skills: ["Angular", "TypeScript", "Node.js", "MongoDB"]
    }
  ];
  