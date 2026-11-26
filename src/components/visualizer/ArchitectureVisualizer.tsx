import React, { useState } from 'react';

/**
 * Interactive view of the ResearchMind AI video-RAG pipeline
 * (the module Mohamed led). Every step comes from the CV.
 */

interface Step {
  id: string;
  label: string;
  tech: string;
  color: string;
  what: string;
  why: string;
}

const STEPS: Step[] = [
  {
    id: 'asr', label: 'Transcribe', tech: 'faster-whisper · GPU', color: 'var(--cyan)',
    what: 'The video is transcribed locally with faster-whisper running on GPU.',
    why: 'Keeps the whole pipeline local and provides the timestamps used later for citations.',
  },
  {
    id: 'chunk', label: 'Chunk', tech: 'timestamped chunks', color: 'var(--lime)',
    what: 'The transcript is split into chunks that keep their start and end timestamps.',
    why: 'Every retrieved passage can point back to an exact moment of the video.',
  },
  {
    id: 'search', label: 'Hybrid search', tech: 'BM25 + multilingual E5 · RRF', color: 'var(--violet)',
    what: 'Lexical BM25 and multilingual E5 embeddings each rank the chunks; Reciprocal Rank Fusion merges both lists.',
    why: 'BM25 catches exact terms, embeddings catch paraphrases — fusion gets the best of both.',
  },
  {
    id: 'rerank', label: 'Rerank', tech: 'cross-encoder', color: 'var(--pink)',
    what: 'A cross-encoder rescores the best candidates by reading question and passage together.',
    why: 'More precise than the first-stage retrievers on the final top results.',
  },
  {
    id: 'llm', label: 'Answer', tech: 'Qwen 2.5 3B · Ollama', color: 'var(--orange)',
    what: 'A local Qwen 2.5 3B model served by Ollama writes an extractive answer from the retrieved evidence.',
    why: 'Fully local inference; extractive answers stay close to the source.',
  },
  {
    id: 'verify', label: 'Verify & cite', tech: 'evidence check · cited to the second', color: 'var(--yellow)',
    what: 'Evidence sentences are verified and the answer is cited to the second; off-topic questions are rejected.',
    why: 'Measured: 100% of off-topic questions rejected with no false rejections.',
  },
];

export function ArchitectureVisualizer() {
  const [active, setActive] = useState('search');
  const cur = STEPS.find((s) => s.id === active) || STEPS[0];

  return (
    <div className="arch">
      <div className="arch-head">
        <div>
          <div className="arch-kicker">ResearchMind AI · video module</div>
          <div className="arch-title">Fully local video RAG pipeline</div>
        </div>
        <div className="arch-stats">
          <span><b style={{ color: 'var(--violet)' }}>0.95</b> R@3</span>
          <span><b style={{ color: 'var(--pink)' }}>0.85</b> MRR</span>
        </div>
      </div>

      <div className="arch-flow" role="tablist" aria-label="Pipeline steps">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.id}>
            <button
              type="button"
              role="tab"
              aria-selected={s.id === active}
              className={`arch-node${s.id === active ? ' on' : ''}`}
              style={{ ['--c' as any]: s.color }}
              onClick={() => setActive(s.id)}
              onMouseEnter={() => setActive(s.id)}
            >
              <span className="arch-num">{i + 1}</span>
              <span className="arch-label">{s.label}</span>
              <span className="arch-tech">{s.tech}</span>
            </button>
            {i < STEPS.length - 1 && <span className="arch-link" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>

      <div className="arch-detail" role="tabpanel" style={{ ['--c' as any]: cur.color }}>
        <div className="arch-detail-label">{cur.label}</div>
        <p className="arch-what">{cur.what}</p>
        <p className="arch-why"><span>Why</span>{cur.why}</p>
      </div>
    </div>
  );
}

export default ArchitectureVisualizer;
