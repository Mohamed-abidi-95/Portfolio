import React, { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '../ThemeToggle';

// ── Constants ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '/about' },
  { label: 'AI Lab',   href: '/lab' },
  { label: 'Contact',  href: '/contact' },
];

const FOCUS_ITEMS = [
  { title: 'Generative AI',   sub: 'LLMs · RAG · AI Agents · MCP' },
  { title: 'Computer Vision', sub: 'YOLO · OCR · OpenCV · ONNX' },
  { title: 'Data Science',    sub: 'ML · Analytics · Modeling' },
  { title: 'System Design',   sub: 'Architecture · APIs · DevOps' },
];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Video scrub — RAF-based, throttled to ~30 fps
  const videoRef      = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const prevXRef      = useRef<number | null>(null);
  const rafRef        = useRef<number>(0);

  // ── Sync dark/light mode
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    const onThemeChange = (e: Event) => {
      const ce = e as CustomEvent<{ theme: 'light' | 'dark' }>;
      if (ce.detail?.theme) {
        setIsDark(ce.detail.theme === 'dark');
      } else {
        checkDark();
      }
    };

    window.addEventListener('theme-change', onThemeChange);
    return () => window.removeEventListener('theme-change', onThemeChange);
  }, []);

  // ── Scroll nav effect
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // ── RAF seek loop (throttled ≈ 30 fps)
  useEffect(() => {
    let lastTs = 0;
    const loop = (ts: number) => {
      const vid = videoRef.current;
      if (vid && vid.readyState >= 2 && ts - lastTs >= 33) {
        const diff = targetTimeRef.current - vid.currentTime;
        if (Math.abs(diff) > 0.016) {
          vid.currentTime = targetTimeRef.current;
          lastTs = ts;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Mouse-move scrub
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const vid = videoRef.current;
      if (!vid || !vid.duration || isNaN(vid.duration)) return;

      const x = e.clientX;
      if (prevXRef.current === null) { prevXRef.current = x; return; }

      const delta = x - prevXRef.current;
      prevXRef.current = x;

      const SENS = 0.5;
      const offset = (delta / window.innerWidth) * SENS * vid.duration;
      targetTimeRef.current = Math.max(0, Math.min(targetTimeRef.current + offset, vid.duration));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{ position: 'relative', height: '100svh', minHeight: '620px', overflow: 'hidden' }}>

      {/* ── Background Video — absolute inside hero ── */}
      <video
        ref={videoRef}
        src="/video/hero.mp4"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '38% center',
          zIndex: 0,
          filter: isDark
            ? 'contrast(1.04) brightness(0.96)'
            : 'brightness(1.15) contrast(0.92) saturate(0.92)',
          transition: 'filter 0.5s ease',
        }}
        muted
        playsInline
        preload="auto"
      />

      {/* ── Art-directed Overlays for Dark / Light Mode ── */}
      {/* 1. Left overlay: preserves text readability without flattening the video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: isDark
            ? 'linear-gradient(to right, rgba(5,8,5,0.92) 0%, rgba(5,8,5,0.65) 42%, rgba(5,8,5,0.18) 72%, transparent 100%)'
            : 'linear-gradient(to right, rgba(244,242,234,0.94) 0%, rgba(244,242,234,0.74) 42%, rgba(244,242,234,0.22) 74%, transparent 100%)',
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }}
      />

      {/* 2. Bottom vignette: smooth transition to next section */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: isDark
            ? 'linear-gradient(to top, rgba(5,8,5,0.96) 0%, rgba(5,8,5,0.40) 28%, transparent 58%)'
            : 'linear-gradient(to top, rgba(244,242,234,0.98) 0%, rgba(244,242,234,0.45) 28%, transparent 58%)',
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }}
      />

      {/* 3. Top vignette: atmospheric framing for the navbar */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: isDark
            ? 'linear-gradient(to bottom, rgba(5,8,5,0.55) 0%, transparent 24%)'
            : 'linear-gradient(to bottom, rgba(244,242,234,0.65) 0%, transparent 24%)',
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }}
      />

      {/* 4. Light Mode only: subtle morning mist / warm daylight glow */}
      {!isDark && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'radial-gradient(ellipse at 75% 25%, rgba(255, 252, 240, 0.35) 0%, transparent 65%)',
            pointerEvents: 'none',
            mixBlendMode: 'soft-light',
          }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NAVBAR — Fixed top bar with glassmorphism on scroll             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          height: '60px',
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-bottom 0.35s ease',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Mohamed <span style={{ color: 'var(--color-accent)' }}>ABIDI</span>
          </span>
        </a>

        {/* Center Nav — Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: 'var(--text-muted)',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right Controls: Download CV + Theme Toggle + Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {/* Download CV (desktop) */}
          <a
            href="/cv/mohamed-abidi-cv.pdf"
            download="Mohamed-Abidi-CV.pdf"
            className="hidden md:inline-flex items-center"
            style={{
              color: 'var(--color-accent)',
              fontSize: '13px',
              fontWeight: 500,
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid var(--color-accent-border)',
              backgroundColor: 'var(--color-accent-soft)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-border)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent-soft)')}
          >
            Download CV
          </a>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(7px)'
                    : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Navigation Drawer ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 40px',
          gap: '24px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {NAV_LINKS.map(l => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--text-primary)',
              fontSize: '28px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {l.label}
          </a>
        ))}
        <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a
            href="/cv/mohamed-abidi-cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--color-accent)',
              fontSize: '20px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Download CV ↓
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO CONTENT: Eye-flow Hierarchy                                */}
      {/* 1. Eyebrow -> 2. Name -> 3. Main Pitch -> 4. Description -> 5. CTAs */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '60px',
          padding: '60px 40px 32px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1080px',
            margin: '0 auto',
            gap: '48px',
          }}
          className="hero-inner"
        >
          {/* ── LEFT: Main Statement & CTAs ────────────────────────── */}
          <div style={{ flex: '1 1 0', minWidth: 0, maxWidth: '580px' }}>

            {/* 1. Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
                opacity: 0,
                animation: 'fadeInUp 0.55s ease 0.1s forwards',
              }}
            >
              <span style={{ display: 'inline-block', width: '22px', height: '1px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
              <span
                style={{
                  color: 'var(--color-accent)',
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                AI Engineer & Data Scientist
              </span>
            </div>

            {/* 2. Name */}
            <div style={{ marginBottom: '16px', opacity: 0, animation: 'fadeInUp 0.55s ease 0.2s forwards' }}>
              <h1
                style={{
                  fontSize: 'clamp(32px, 5.2vw, 56px)',
                  fontWeight: 700,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Mohamed <span style={{ color: 'var(--color-accent)' }}>ABIDI</span>
              </h1>
            </div>

            {/* 3. Main Statement */}
            <div
              style={{
                marginBottom: '16px',
                opacity: 0,
                animation: 'fadeInUp 0.55s ease 0.3s forwards',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 'clamp(20px, 3.2vw, 32px)',
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.25,
                  color: 'var(--text-primary)',
                }}
              >
                I build{' '}
                <span style={{ color: 'var(--color-accent)' }}>INTELLIGENT SYSTEMS.</span>
              </p>
            </div>

            {/* 4. Description */}
            <p
              style={{
                margin: '0 0 28px',
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                lineHeight: 1.6,
                fontWeight: 400,
                color: 'var(--text-muted)',
                maxWidth: '520px',
                opacity: 0,
                animation: 'fadeInUp 0.55s ease 0.4s forwards',
              }}
            >
              From RAG pipelines to Computer Vision — I engineer AI systems designed to work in production.
            </p>

            {/* 5. CTAs: View My Work & Contact Me only (Clean & Focused) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                opacity: 0,
                animation: 'fadeInUp 0.55s ease 0.5s forwards',
              }}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '11px 26px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, transform 0.15s',
                  boxShadow: 'var(--card-shadow)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--btn-primary-bg)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View My Work
              </a>

              {/* Secondary CTA */}
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: 'var(--btn-secondary-text)',
                  border: '1px solid var(--btn-secondary-border)',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '10px 24px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--btn-secondary-hover)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--btn-secondary-border)';
                }}
              >
                Contact Me
              </a>
            </div>

            {/* Subtle Scroll Hint */}
            <div
              className="hidden md:flex"
              style={{
                alignItems: 'center',
                gap: '12px',
                marginTop: '40px',
                opacity: 0.45,
              }}
            >
              <span style={{ display: 'block', width: '1px', height: '24px', backgroundColor: 'var(--color-accent)' }} />
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── RIGHT: Editorial "My Focus" Panel ──────────────────── */}
          <div
            className="hidden md:block"
            style={{ flexShrink: 0, width: '230px' }}
          >
            <div
              style={{
                background: 'var(--bg-panel)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--border-card)',
                borderRadius: '16px',
                padding: '24px 22px',
                boxShadow: 'var(--card-shadow)',
                opacity: 0,
                animation: 'fadeIn 0.7s ease 0.6s forwards',
                transition: 'background 0.35s ease, border-color 0.35s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                <p
                  style={{
                    color: 'var(--color-accent)',
                    fontSize: '10px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono, monospace',
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  My Focus
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {FOCUS_ITEMS.map(item => (
                  <div key={item.title}>
                    <p style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 600, margin: '0 0 3px' }}>
                      {item.title}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '11px', lineHeight: 1.45, margin: 0 }}>
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>{/* end hero-inner */}
      </div>{/* end hero content */}

    </div>
  );
}
export default HeroSection;
