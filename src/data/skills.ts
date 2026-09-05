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
      { name: "AI Agents & MCP", context: "Tool calling, Model Context Protocol, autonomous workflows" }
    ]
  },
  {
    domain: "Computer Vision",
    skills: [
      { name: "YOLO (v8/v11)", context: "Real-time industrial defect & object detection" },
      { name: "OpenCV / OpenCvSharp", context: "Image preprocessing, morphological filters, feature detection" },
      { name: "OCR", context: "Text & label extraction for automated quality inspection" },
      { name: "ONNX Runtime", context: "Optimized multi-platform model inference" }
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
      { name: "C# / .NET 8", context: "Enterprise backend architecture, clean architecture" },
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
