export interface Skill {
  name: string;
  context: string;
}

export interface SkillCategory {
  domain: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    domain: "Generative AI",
    skills: [
      { name: "LLMs", context: "Prompt engineering, context window management, structured outputs" },
      { name: "RAG Systems", context: "Hybrid search, chunking strategies, semantic retrieval" },
      { name: "Embeddings & Vector Search", context: "Vector DBs, embedding models, similarity metrics" },
      { name: "Function Calling", context: "Gemini API, tool calling, structured JSON outputs" }
    ]
  },
  {
    domain: "Computer Vision",
    skills: [
      { name: "OpenCV / OpenCvSharp", context: "Image preprocessing, calibration, distortion correction" },
      { name: "OCR (Tesseract)", context: "Text extraction for label inspection" },
      { name: "Text Detection & QR", context: "EAST text detector, QR-code reading" },
      { name: "YOLO", context: "Basics: object detection" }
    ]
  },
  {
    domain: "Machine Learning",
    skills: [
      { name: "Machine Learning", context: "Supervised & unsupervised learning, ensemble models" },
      { name: "Model Evaluation", context: "Cross-validation, regression & classification metrics" },
      { name: "Data Preprocessing", context: "Cleaning, normalization, missing value handling" },
      { name: "Feature Engineering & ML Pipelines", context: "End-to-end reproducible training & evaluation pipelines" }
    ]
  },
  {
    domain: "Software Engineering",
    skills: [
      { name: "Python", context: "FastAPI, PyTorch, data processing, scientific stack" },
      { name: "C# / .NET 8", context: "ASP.NET Core, Clean Architecture, MediatR / CQRS" },
      { name: "REST APIs & System Design", context: "Scalable service interfaces, contract-first design" },
      { name: "PostgreSQL & Docker", context: "Relational data modeling, pgvector, container isolation" }
    ]
  },
  {
    domain: "Frontend",
    skills: [
      { name: "React", context: "Interactive component islands, state management, hooks" },
      { name: "TypeScript", context: "Strict typing, interface contracts, safe refactoring" },
      { name: "Astro", context: "High-performance content-driven static generation" },
      { name: "Tailwind CSS", context: "Design systems, accessible responsive UI, theme tokens" }
    ]
  }
];
