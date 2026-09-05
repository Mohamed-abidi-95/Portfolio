import React, { useState } from 'react';
import { User, Layout, Cpu, Bot, Database, Brain, CheckCircle, Search, Wrench, Clock } from 'lucide-react';

interface SubComponent {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

interface NodeInfo {
  id: string;
  label: string;
  tag: string;
  icon: React.ReactNode;
  role: string;
  tech: string;
  details: string;
  subComponents?: SubComponent[];
}

const ARCH_NODES: NodeInfo[] = [
  {
    id: 'user',
    label: 'User',
    tag: 'Client',
    icon: <User className="w-4 h-4" />,
    role: 'Client / Interaction',
    tech: 'React / Web Interface',
    details: 'Initiates semantic inquiries, compliance audits, or image inspection requests through an interactive interface.',
  },
  {
    id: 'app',
    label: 'Application',
    tag: 'Frontend / Gateway',
    icon: <Layout className="w-4 h-4" />,
    role: 'Frontend & API Gateway',
    tech: 'TypeScript, REST / SSE',
    details: 'Handles input sanitation, streaming response rendering, token authentication, and telemetry tracking.',
  },
  {
    id: 'orchestrator',
    label: 'AI Orchestrator',
    tag: 'Control Plane',
    icon: <Cpu className="w-4 h-4" />,
    role: 'Pipeline Controller',
    tech: '.NET 8 / FastAPI',
    details: 'Enforces rate limits, validates schema contracts, executes guardrails, and routes tasks to specialized agents.',
  },
  {
    id: 'agent',
    label: 'Autonomous Agent',
    tag: 'Execution Plane',
    icon: <Bot className="w-4 h-4" />,
    role: 'Decision & Tool Engine',
    tech: 'LangChain / Custom Agent Core',
    details: 'Decomposes complex requests into deterministic steps with tool execution, memory recall, and contextual synthesis.',
    subComponents: [
      { name: 'Retriever', desc: 'Hybrid dense/sparse query search', icon: <Search className="w-3.5 h-3.5" /> },
      { name: 'Tools (MCP)', desc: 'Deterministic code execution & APIs', icon: <Wrench className="w-3.5 h-3.5" /> },
      { name: 'Memory', desc: 'Sliding window session state', icon: <Clock className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'vectordb',
    label: 'Vector Database',
    tag: 'Knowledge Store',
    icon: <Database className="w-4 h-4" />,
    role: 'Semantic Storage & Retrieval',
    tech: 'PostgreSQL (pgvector)',
    details: 'Stores high-dimensional embeddings of enterprise documents, standard compliance frameworks (ISO 27001), and logs.',
  },
  {
    id: 'llm',
    label: 'LLM / Inference Engine',
    tag: 'Reasoning Core',
    icon: <Brain className="w-4 h-4" />,
    role: 'Inference & Synthesis',
    tech: 'Llama 3 / Claude / OpenAI',
    details: 'Performs deep reasoning over retrieved knowledge chunks to extract structured findings with citations and zero hallucinations.',
  },
  {
    id: 'response',
    label: 'Verified Response',
    tag: 'Delivery',
    icon: <CheckCircle className="w-4 h-4" />,
    role: 'Output Delivery',
    tech: 'Typed JSON / Markdown Stream',
    details: 'Streams validated results, compliance matrices, and actionable audit items directly back to the client interface.',
  },
];

export function ArchitectureVisualizer() {
  const [activeId, setActiveId] = useState<string>('agent');
  const activeNode = ARCH_NODES.find(n => n.id === activeId) || ARCH_NODES[0];

  return (
    <div
      className="rounded-2xl border transition-colors duration-300"
      style={{
        background: 'var(--bg-panel)',
        borderColor: 'var(--border-card)',
        boxShadow: 'var(--card-shadow)',
        padding: '28px',
      }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold" style={{ color: 'var(--color-accent)' }}>
              End-to-End Enterprise Flow
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Production AI System Pipeline
          </h3>
        </div>
        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          Click any component to inspect its architecture & role
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Graph Pipeline */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ARCH_NODES.slice(0, 4).map((node) => {
              const isSelected = activeId === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className="p-3.5 rounded-xl border text-left flex flex-col gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
                  style={{
                    background: isSelected ? 'var(--color-accent-soft)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--color-accent)' : 'var(--border-color)',
                    boxShadow: isSelected ? '0 4px 14px -2px var(--color-accent-soft)' : 'none',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="p-1.5 rounded-md"
                      style={{
                        background: isSelected ? 'var(--color-accent)' : 'var(--border-color)',
                        color: isSelected ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                      }}
                    >
                      {node.icon}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: 'var(--text-dim)' }}>
                      {node.tag}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono truncate" style={{ color: 'var(--text-muted)' }}>
                      {node.tech}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sub-agent layer (Retriever / Tools / Memory) */}
          <div
            className="rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{
              background: 'var(--bg-card)',
              border: '1px dashed var(--border-card)',
            }}
          >
            <span className="text-[11px] font-mono font-medium flex items-center gap-1.5" style={{ color: 'var(--color-accent)' }}>
              <span>↳</span> Agent Execution Core:
            </span>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {ARCH_NODES[3].subComponents?.map(sub => (
                <div
                  key={sub.name}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono"
                  style={{
                    background: 'var(--color-accent-soft)',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-accent-border)',
                  }}
                >
                  {sub.icon}
                  <span>{sub.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ARCH_NODES.slice(4).map((node) => {
              const isSelected = activeId === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className="p-3.5 rounded-xl border text-left flex flex-col gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
                  style={{
                    background: isSelected ? 'var(--color-accent-soft)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--color-accent)' : 'var(--border-color)',
                    boxShadow: isSelected ? '0 4px 14px -2px var(--color-accent-soft)' : 'none',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="p-1.5 rounded-md"
                      style={{
                        background: isSelected ? 'var(--color-accent)' : 'var(--border-color)',
                        color: isSelected ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                      }}
                    >
                      {node.icon}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: 'var(--text-dim)' }}>
                      {node.tag}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono truncate" style={{ color: 'var(--text-muted)' }}>
                      {node.tech}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Node Inspector Detail Panel */}
        <div
          className="lg:col-span-4 rounded-xl p-5 border flex flex-col gap-4"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-card)',
          }}
        >
          <div className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg" style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}>
                {activeNode.icon}
              </span>
              <div>
                <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  {activeNode.label}
                </h4>
                <span className="text-[10px] font-mono" style={{ color: 'var(--color-accent)' }}>
                  {activeNode.tag}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider block mb-1" style={{ color: 'var(--text-dim)' }}>
                Role
              </span>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {activeNode.role}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider block mb-1" style={{ color: 'var(--text-dim)' }}>
                Primary Technology
              </span>
              <span
                className="inline-block font-mono px-2 py-0.5 rounded text-[11px]"
                style={{
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-accent-border)',
                }}
              >
                {activeNode.tech}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider block mb-1" style={{ color: 'var(--text-dim)' }}>
                Technical Responsibility
              </span>
              <p className="leading-relaxed text-[12px] m-0" style={{ color: 'var(--text-muted)' }}>
                {activeNode.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArchitectureVisualizer;
