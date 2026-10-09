// ─── App.tsx — PixelQuest Portfolio ──────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalDrawer } from './components/TerminalDrawer';
import { sfx } from './utils/soundEffects';

const PALETTES: Record<string, { main: string; dim: string; glow: string }> = {
  gold: {
    main: '#F4C95D',
    dim: 'rgba(244, 201, 93, 0.15)',
    glow: 'rgba(244, 201, 93, 0.25)',
  },
  cyan: {
    main: '#38BDF8',
    dim: 'rgba(56, 189, 248, 0.15)',
    glow: 'rgba(56, 189, 248, 0.25)',
  },
  emerald: {
    main: '#34D399',
    dim: 'rgba(52, 211, 153, 0.15)',
    glow: 'rgba(52, 211, 153, 0.25)',
  },
  purple: {
    main: '#C084FC',
    dim: 'rgba(192, 132, 252, 0.15)',
    glow: 'rgba(192, 132, 252, 0.25)',
  },
  amber: {
    main: '#FB923C',
    dim: 'rgba(251, 146, 60, 0.15)',
    glow: 'rgba(251, 146, 60, 0.25)',
  },
};

const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scanlinesActive, setScanlinesActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState('gold');

  const applyTheme = (themeName: string) => {
    const palette = PALETTES[themeName] || PALETTES.gold;
    setActiveTheme(themeName);
    localStorage.setItem('pixelquest_theme', themeName);

    const root = document.documentElement;
    root.style.setProperty('--accent-gold', palette.main);
    root.style.setProperty('--text-gold', palette.main);
    root.style.setProperty('--accent-gold-dim', palette.dim);
    root.style.setProperty('--accent-gold-glow', palette.glow);
  };

  useEffect(() => {
    // Restore saved theme
    const savedTheme = localStorage.getItem('pixelquest_theme');
    if (savedTheme && PALETTES[savedTheme]) {
      applyTheme(savedTheme);
    }

    // Keyboard shortcut (`) to toggle terminal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        const activeEl = document.activeElement;
        const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA';
        if (!isInput) {
          e.preventDefault();
          setTerminalOpen(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* CRT Scanline Filter Overlay */}
      {scanlinesActive && <div className="crt-scanlines" />}

      {/* Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        activeTheme={activeTheme}
        onThemeChange={applyTheme}
        scanlinesActive={scanlinesActive}
        onToggleScanlines={() => setScanlinesActive(s => !s)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Retro CLI Button (Bottom Right) */}
      {!terminalOpen && (
        <button
          onClick={() => {
            sfx.playSelect();
            setTerminalOpen(true);
          }}
          className="btn"
          id="btn-floating-terminal"
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 90,
            background: 'var(--bg-section)',
            border: '2px solid var(--accent-gold)',
            color: 'var(--text-gold)',
            padding: '10px 16px',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.6), 0 0 16px var(--accent-gold-dim)',
            fontFamily: 'monospace',
            fontSize: 12,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            sfx.playBlip();
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
          }}
          title="Open Developer Shell (Shortcut: `)"
          aria-label="Open Interactive CLI Terminal"
        >
          <TerminalIcon size={16} />
          <span className="pixel-xxs" style={{ letterSpacing: 0.5 }}>&gt;_ CLI TERMINAL</span>
        </button>
      )}

      {/* Retro Dev Terminal Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onThemeChange={applyTheme}
        onScanlinesToggle={() => setScanlinesActive(s => !s)}
      />
    </>
  );
};

export default App;
