// Single source for the site's personal content.
// Every fact here comes from Mohamed's CV (EN, 2026) / master profile.
// Do not add skills, numbers or titles that are not in those documents.

export const person = {
  name: 'Mohamed Abidi',
  title: 'AI Engineer · Data Scientist',
  status: 'Data Science & AI engineering student (5th year, ESPRIM)',
  location: 'Nefta, Tozeur — Tunisia',
  email: 'Mohamed.abidi@esprim.tn',
  github: 'https://github.com/Mohamed-abidi-95',
  githubHandle: 'Mohamed-abidi-95',
  linkedin: 'https://www.linkedin.com/in/mohamed-abidi95000',
  cv: '/cv/mohamed-abidi-cv.pdf',
  lookingFor: '6-month end-of-studies internship (PFE)',
  availability: 'from February 2027',
  countries: ['Tunisia', 'Germany', 'Switzerland', 'France'],
  summary:
    'Data Science & AI engineering student specializing in RAG systems and generative AI applied to document analysis, with hands-on experience in Arabic/French NLP and information retrieval.',
  goal:
    'Deepen my expertise in the evaluation, reliability and production deployment of LLMs and RAG pipelines.',
};

/** Headline numbers — all measured on ResearchMind AI / LegalTN (see CV). */
export const proofPoints = [
  { value: '0.95', label: 'Recall@3', detail: 'ResearchMind · video RAG', color: 'var(--violet)' },
  { value: '0.85', label: 'MRR on the hard set', detail: 'ResearchMind · video RAG', color: 'var(--pink)' },
  { value: '100%', label: 'off-topic questions rejected', detail: 'with no false rejections', color: 'var(--orange)' },
  { value: '79', label: 'automated tests', detail: 'LegalTN · AR/FR legal search', color: 'var(--cyan)' },
];

export interface Experience {
  company: string;
  unit?: string;
  role: string;
  period: string;
  focus: string;
  bullets: string[];
  tags: string[];
  repo?: string;
  project?: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    company: 'DRÄXLMAIER Group Tunisia',
    unit: 'IT Center',
    role: 'AI & Enterprise Solutions Engineering Intern',
    period: 'Aug – Sep 2026',
    focus: 'Intelligent GRC assistant (prototype)',
    bullets: [
      'Designed a RAG pipeline: document ingestion, embeddings, semantic search and contextualized answer generation.',
      'Used a vector database to compare internal policies with standard requirements (ISO 27001, ISO 9001).',
      'Prototyped compliance gap detection and automatic summarization of audit documents.',
      '.NET / REST API backend with role-based access control and audit-trail logging.',
    ],
    tags: ['RAG', 'Embeddings', 'Vector DB', '.NET 8', 'REST API', 'RBAC'],
    repo: 'https://github.com/Mohamed-abidi-95/Draxelmaier-Grc-Plateform',
    project: '/projects/ai-grc',
    color: 'var(--violet)',
  },
  {
    company: 'ETIC Europe',
    unit: 'Industrial Quality Control',
    role: 'Computer Vision & C# Engineering Intern',
    period: 'Jul 2026',
    focus: 'Optical label inspection on a production line (prototype)',
    bullets: [
      'Label inspection with OpenCV: EAST text detection, Tesseract OCR and QR-code decoding.',
      'Image-based metrology with camera calibration and distortion correction.',
      'Robust preprocessing (adaptive thresholding, denoising, orientation correction).',
      '.NET 8 / WinForms desktop application with real-time KPIs.',
    ],
    tags: ['OpenCV', 'EAST', 'Tesseract OCR', 'QR codes', 'C#', '.NET 8'],
    repo: 'https://github.com/Mohamed-abidi-95/ETICLabelInspectionDesktop',
    project: '/projects/etic-label-inspection',
    color: 'var(--orange)',
  },
];

export const education = [
  { school: 'ESPRIM — Monastir', degree: 'Engineering degree in Data Science & Artificial Intelligence', period: '2024 – 2027' },
  { school: 'ESPRIT School of Business', degree: "Bachelor's degree in Business Computing", period: '2019 – 2023' },
  { school: 'Nefta High School', degree: 'Baccalaureate in Experimental Sciences', period: '2019' },
];

export const languages = [
  { name: 'Arabic', level: 'Native', pct: 100 },
  { name: 'French', level: 'B2–C1 (TCF)', pct: 80 },
  { name: 'English', level: 'B2', pct: 70 },
];

export const softSkills = ['Problem solving', 'Autonomy & rigor', 'Teamwork', 'Curiosity'];

export const skillGroups = [
  {
    name: 'Generative AI & RAG',
    color: 'var(--violet)',
    items: ['LLM', 'RAG', 'Hybrid search (BM25 + embeddings)', 'Reranking', 'Ollama', 'Qwen', 'ChromaDB', 'FAISS', 'LangChain', 'Pydantic', 'Gemini'],
  },
  {
    name: 'ML / NLP / Vision',
    color: 'var(--pink)',
    items: ['Evaluation (Recall@k, MRR)', 'PyTorch', 'scikit-learn', 'Sentence Transformers', 'faster-whisper', 'CRF', 'SymSpell', 'NLTK', 'OpenCV', 'OCR'],
  },
  {
    name: 'Programming languages',
    color: 'var(--orange)',
    items: ['Python', 'SQL', 'C#', 'JavaScript', 'PHP', 'C'],
  },
  {
    name: 'Backend & data',
    color: 'var(--cyan)',
    items: ['FastAPI', 'Next.js', '.NET 8', 'Node.js', 'SQLAlchemy', 'PostgreSQL', 'MySQL', 'SQL Server', 'pandas'],
  },
  {
    name: 'DevOps & tools',
    color: 'var(--lime)',
    items: ['Docker', 'pytest', 'Prometheus', 'Grafana', 'Git / GitHub', 'Linux', 'Agile / Scrum'],
  },
];

/** Tech shown in the scrolling marquee (subset of the CV skills). */
export const marqueeA = ['RAG', 'BM25', 'Multilingual E5', 'RRF fusion', 'Cross-encoder reranking', 'Qwen 2.5', 'Ollama', 'faster-whisper', 'ChromaDB', 'FAISS', 'LangChain', 'Pydantic'];
export const marqueeB = ['Python', 'PyTorch', 'scikit-learn', 'Sentence Transformers', 'OpenCV', 'Tesseract OCR', 'FastAPI', 'Next.js', '.NET 8', 'PostgreSQL', 'Docker', 'pytest'];
