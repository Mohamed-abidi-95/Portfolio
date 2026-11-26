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
    role: "AI Summer Intern",
    company: "DRÄXLMAIER Group Tunisia – IT Center",
    date: "Aug 2026 · 1 month",
    bullets: [
      "Built a full-stack GRC (governance, risk, compliance) prototype: ASP.NET Core 8 (Clean Architecture, MediatR/CQRS), React 19 + TypeScript, PostgreSQL (EF Core), MinIO.",
      "Implemented risk, policy-approval, framework mapping, evidence, SoA report and audit modules, with JWT auth and role-based access (6 roles).",
      "Added an automatic audit log of all changes and a rule-based compliance rate per framework; prepared a pgvector schema for a future RAG layer (not finished)."
    ]
  },
  {
    role: "Computer Vision Summer Intern",
    company: "ETIC Europe",
    date: "Jul 2026 · 1 month",
    bullets: [
      "Built a label-inspection prototype for a production line with OpenCV / OpenCvSharp4.",
      "Combined text detection (EAST), OCR (Tesseract) and QR-code reading, with camera calibration, distortion correction and preprocessing for varying angles and lighting.",
      "Developed a C# / .NET 8 WinForms desktop interface to follow inspection results."
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
    degree: "Bachelor in Business Computing – Business Information Systems",
    institution: "ESPRIT School of Business",
    date: "2019 - 2023"
  },
  {
    degree: "Baccalauréat (Experimental Sciences)",
    institution: "High School",
    date: "2019"
  }
];
