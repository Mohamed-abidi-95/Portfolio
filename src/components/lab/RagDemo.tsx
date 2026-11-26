import React, { useMemo, useState } from 'react';

/**
 * "Ask my CV" — a tiny extractive search engine that runs in the browser.
 * BM25 ranking over short passages taken from the CV, with source citations
 * and abstention when nothing relevant is found. No LLM, nothing generated.
 */

interface Passage { id: string; source: string; text: string; }

const PASSAGES: Passage[] = [
  { id: 'p1', source: 'Profile', text: 'Data Science and AI engineering student (5th year at ESPRIM) specializing in RAG systems and generative AI applied to document analysis, with experience in Arabic/French NLP and information retrieval.' },
  { id: 'p2', source: 'Profile', text: 'Looking for a 6-month end-of-studies internship (PFE) from February 2027, in Tunisia, Germany, Switzerland or France.' },
  { id: 'p3', source: 'Experience / DRÄXLMAIER', text: 'At DRÄXLMAIER Group Tunisia IT Center (August–September 2026), designed a RAG pipeline for an intelligent GRC assistant: document ingestion, embeddings, semantic search and contextualized answer generation.' },
  { id: 'p4', source: 'Experience / DRÄXLMAIER', text: 'Used a vector database to compare internal policies with ISO 27001 and ISO 9001 requirements; prototyped compliance gap detection and automatic summarization of audit documents, with a .NET REST API, RBAC and audit trail.' },
  { id: 'p5', source: 'Experience / ETIC Europe', text: 'At ETIC Europe (July 2026), built an optical label inspection prototype for a production line with OpenCV, EAST text detection, Tesseract OCR and QR code decoding, plus camera calibration and distortion correction.' },
  { id: 'p6', source: 'Experience / ETIC Europe', text: 'Robust preprocessing for the label inspection: adaptive thresholding, denoising and orientation correction, in a .NET 8 WinForms application with real-time KPIs.' },
  { id: 'p7', source: 'Projects / ResearchMind', text: 'ResearchMind AI is a multimodal scientific RAG platform (team of 5). Mohamed led the video module: local transcription with faster-whisper on GPU, timestamped chunking, hybrid search BM25 plus multilingual E5 with RRF fusion, and cross-encoder reranking.' },
  { id: 'p8', source: 'Projects / ResearchMind', text: 'The ResearchMind video RAG is fully local (Qwen 2.5 3B with Ollama), verifies evidence sentences and gives extractive answers cited to the second.' },
  { id: 'p9', source: 'Projects / ResearchMind', text: 'Evaluation of the ResearchMind video module: Recall@3 = 0.95, MRR = 0.85 on the hard set, and 100% of off-topic questions rejected with no false rejections; 35 automated tests, FastAPI, Next.js, Docker.' },
  { id: 'p10', source: 'Projects / LegalTN', text: 'LegalTN is a bilingual Arabic/French legal search engine over the Tunisian Labor Code, without LLM: about 500 articles per language extracted with OCR from a 291-page PDF, with automatic AR/FR alignment.' },
  { id: 'p11', source: 'Projects / LegalTN', text: 'LegalTN uses a BM25 engine with abstention and source citation; questions can be asked in French, Arabic, Tunisian dialect or Arabizi, using Arabizi transliteration, Arabic normalization, SymSpell and CRF named-entity recognition; 79 automated tests.' },
  { id: 'p12', source: 'Projects / Presentation Generator', text: 'AI presentation generator (team of 5): a Streamlit app that turns text into a 1 to 20 slide presentation (PPTX or PDF) with a quantized local LLM, Qwen2.5-3B, using constrained decoding and Pydantic JSON validation, plus a benchmark of open-source models.' },
  { id: 'p13', source: 'Projects / AutiConnect', text: 'AutiConnect: French/Arabic chatbot with Gemini 1.5 Flash, function calling and validated JSON outputs, on a Node.js REST API with JWT and MySQL.' },
  { id: 'p14', source: 'Skills', text: 'Generative AI and RAG skills: LLM, RAG, hybrid search (BM25 and embeddings), reranking, Ollama, Qwen, ChromaDB, FAISS, LangChain, Pydantic, Gemini.' },
  { id: 'p15', source: 'Skills', text: 'Machine learning, NLP and vision skills: evaluation with Recall@k and MRR, PyTorch, scikit-learn, Sentence Transformers, faster-whisper, CRF, SymSpell, NLTK, OpenCV, OCR. Languages: Python, SQL, C#, JavaScript, PHP, C.' },
  { id: 'p16', source: 'Education', text: 'Education: engineering degree in Data Science and Artificial Intelligence at ESPRIM Monastir (2024–2027); bachelor in Business Computing at ESPRIT School of Business (2019–2023).' },
  { id: 'p17', source: 'Languages', text: 'Spoken languages: Arabic native, French B2–C1 (TCF), English B2.' },
];

const STOP = new Set((
  'a an and are as at be by did do does for from has have he his him how i in is it its me mohamed abidi of on or the to was were ' +
  'what when where which who whom why with you your about can could tell give list show any some ' +
  'use used uses using tool tools know knows knew work worked works working experience'
).split(' '));

const tokenize = (s: string) =>
  s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9@.+#]+/g, ' ')
    .split(' ')
    .map((t) => t.replace(/^[.]+|[.]+$/g, ''))
    .filter((t) => t.length > 1 && !STOP.has(t))
    // crude stemming: "evaluate"/"evaluation" → "evaluat", "databases" → "databas"
    .map((t) => (t.length > 7 ? t.slice(0, 7) : t.replace(/s$/, '')));

function buildIndex(passages: Passage[]) {
  const docs = passages.map((p) => tokenize(p.text + ' ' + p.source));
  const df = new Map<string, number>();
  docs.forEach((d) => new Set(d).forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
  const avg = docs.reduce((s, d) => s + d.length, 0) / docs.length;
  return { docs, df, avg, N: docs.length };
}

function bm25(query: string, idx: ReturnType<typeof buildIndex>, k1 = 1.4, b = 0.75) {
  const q = Array.from(new Set(tokenize(query)));
  return idx.docs.map((d, i) => {
    let score = 0;
    const hits: string[] = [];
    for (const t of q) {
      const tf = d.filter((x) => x === t).length;
      if (!tf) continue;
      hits.push(t);
      const n = idx.df.get(t) || 0;
      const idf = Math.log(1 + (idx.N - n + 0.5) / (n + 0.5));
      score += idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * d.length) / idx.avg)));
    }
    return { i, score, hits };
  }).sort((a, b) => b.score - a.score);
}

function highlight(text: string, hits: string[]) {
  if (!hits.length) return text;
  // hits are stems: highlight every word that starts with one of them
  const re = new RegExp(`\\b(${hits.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})[\\p{L}\\d]*`, 'giu');
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(<mark key={start} className="rag-mark">{m[0]}</mark>);
    last = start + m[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

const SUGGESTIONS = [
  'What did he evaluate in ResearchMind?',
  'Which OCR tools has he used?',
  'Does he speak German?',
  'When is he available for a PFE?',
  'Arabizi',
];

const THRESHOLD = 1.5;

type Turn =
  | { role: 'user'; text: string }
  | { role: 'bot'; results: { p: Passage; score: number; hits: string[] }[] }
  | { role: 'abstain'; best: number };

export function RagDemo() {
  const index = useMemo(() => buildIndex(PASSAGES), []);
  const [query, setQuery] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);

  const ask = (q: string) => {
    const text = q.trim();
    if (!text) return;
    const ranked = bm25(text, index);
    const top = ranked.filter((r) => r.score >= THRESHOLD).slice(0, 2);
    const next: Turn[] = [{ role: 'user', text }];
    if (!top.length) next.push({ role: 'abstain', best: ranked[0]?.score || 0 });
    else next.push({ role: 'bot', results: top.map((r) => ({ p: PASSAGES[r.i], score: r.score, hits: r.hits })) });
    setTurns((t) => [...t, ...next].slice(-8));
    setQuery('');
  };

  return (
    <div className="rag">
      <div className="rag-head">
        <div>
          <div className="rag-title">Ask my CV</div>
          <div className="rag-sub">BM25 · {PASSAGES.length} passages · threshold {THRESHOLD}</div>
        </div>
        <span className="rag-badge">runs in your browser · no LLM</span>
      </div>

      <div className="rag-body" aria-live="polite">
        {turns.length === 0 && (
          <div className="rag-empty">
            <p>Ask anything about my experience, projects or skills. I only return passages from my CV, with their source — and I say so when I don't know.</p>
          </div>
        )}
        {turns.map((t, i) => {
          if (t.role === 'user') return <div key={i} className="rag-q">{t.text}</div>;
          if (t.role === 'abstain') return (
            <div key={i} className="rag-a rag-abstain">
              <strong>I don't know.</strong> No passage scored above the threshold (best: {t.best.toFixed(2)}). Rather than guess, the engine abstains.
            </div>
          );
          return (
            <div key={i} className="rag-a">
              {t.results.map((r, j) => (
                <div key={j} className="rag-hit">
                  <p>{highlight(r.p.text, r.hits)}</p>
                  <div className="rag-meta">
                    <span className="rag-src">[{j + 1}] {r.p.source}</span>
                    <span className="rag-score">score {r.score.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="rag-sugs">
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" className="rag-sug" onClick={() => ask(s)}>{s}</button>
        ))}
      </div>

      <form className="rag-form" onSubmit={(e) => { e.preventDefault(); ask(query); }}>
        <label htmlFor="rag-input" className="sr-only">Your question</label>
        <input
          id="rag-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Which vector databases does he know?"
          autoComplete="off"
        />
        <button type="submit" disabled={!query.trim()} aria-label="Search">→</button>
      </form>
    </div>
  );
}

export default RagDemo;
