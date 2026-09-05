export interface Experience {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export const experiences: Experience[] = [
  {
    role: "IT & AI Engineering Intern",
    company: "DRÄXLMAIER",
    date: "2026",
    bullets: [
      "Monitored virtualized enterprise infrastructure.",
      "Architected an AI-GRC compliance platform using .NET 8, PostgreSQL, and Docker.",
      "Implemented a specialized RAG pipeline automating ISO 27001 compliance audit gap detection."
    ]
  },
  {
    role: "AI & Computer Vision Developer",
    company: "ETIC Europe",
    date: "2025 - 2026",
    bullets: [
      "Engineered an industrial quality inspection system with C#, .NET, and OpenCvSharp.",
      "Deployed YOLOv8 and ONNX Runtime for real-time high-throughput defect detection.",
      "Integrated OCR text verification and persisted validation results in SQL Server."
    ]
  }
];

export const certificationsList: Certification[] = [
  {
    title: "AI Fundamentals Certificate",
    issuer: "DataCamp",
  },
  {
    title: "Data Governance Fundamentals Certificate",
    issuer: "DataCamp",
  },
  {
    title: "EU AI Act Literacy Certificate",
    issuer: "DataCamp",
    date: "August 2026"
  }
];

export const educationList: Education[] = [
  {
    degree: "Data Science & AI Engineering (3rd Year Student)",
    institution: "ESPRIM",
    date: "2024 - Present"
  },
  {
    degree: "Preparatory Classes",
    institution: "ESPRIT School of Business",
    date: "2022 - 2023"
  },
  {
    degree: "Baccalauréat (Experimental Sciences)",
    institution: "High School",
    date: "2019"
  }
];
