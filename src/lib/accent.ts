export const categories = ['GenAI & RAG', 'NLP', 'Computer Vision', 'Full-Stack', 'Cybersecurity'] as const;
export type Category = (typeof categories)[number];

/** Each project category gets its own vivid accent (CSS variable). */
export const categoryAccent: Record<Category, string> = {
  'GenAI & RAG': 'var(--violet)',
  'NLP': 'var(--cyan)',
  'Computer Vision': 'var(--orange)',
  'Full-Stack': 'var(--lime)',
  'Cybersecurity': 'var(--pink)',
};
