import React, { useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export function RagDemo() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Hello! I am a simulated RAG agent. Ask me about Mohamed's portfolio or experience." }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userQuery = query.trim();
    setMessages(prev => [...prev, { role: 'user', content: userQuery }]);
    setQuery("");
    setLoading(true);

    // Simulated RAG response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `(Simulated response) Based on the available context, Mohamed is an AI Engineer who built an AI-GRC platform at DRÄXLMAIER and an industrial inspection system at ETIC Europe.` 
      }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] overflow-hidden flex flex-col h-[500px]">
      <div className="bg-[var(--border-color)]/30 p-4 border-b border-[var(--border-color)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-[var(--color-accent)]" />
          <h3 className="font-medium text-sm">Portfolio QA Agent</h3>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--border-color)] px-2 py-1 rounded">RAG Simulation</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={cn("flex gap-3 max-w-[85%]", msg.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", 
              msg.role === 'user' ? "bg-[var(--border-color)]" : "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
            )}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={cn("px-4 py-2.5 rounded-lg text-sm", 
              msg.role === 'user' ? "bg-[var(--border-color)] text-[var(--text-primary)]" : "bg-transparent border border-[var(--border-color)] text-[var(--text-muted)]"
            )}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3 max-w-[85%]">
             <div className="w-8 h-8 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="px-4 py-3 rounded-lg border border-[var(--border-color)] text-sm flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-color)]">
        <div className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question..."
            className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-md py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
          />
          <button 
            type="submit" 
            disabled={!query.trim() || loading}
            className="absolute right-1 top-1 bottom-1 px-2 text-[var(--text-muted)] hover:text-[var(--color-accent)] disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
