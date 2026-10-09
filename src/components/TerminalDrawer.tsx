// ─── Retro Terminal Drawer / Interactive Dev Console ────────────────────────

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { sfx } from '../utils/soundEffects';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string;
}

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeChange?: (theme: string) => void;
  onScanlinesToggle?: () => void;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onThemeChange,
  onScanlinesToggle,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      text: '════════════════════════════════════════════════════════════',
    },
    {
      id: 'init-2',
      type: 'system',
      text: '  COSMOS_TERMINAL v3.0 (Muhammad Zacky Developer Shell)',
    },
    {
      id: 'init-3',
      type: 'system',
      text: '  Type "help" to view commands, or "projects" to view work.',
    },
    {
      id: 'init-4',
      type: 'system',
      text: '════════════════════════════════════════════════════════════',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      sfx.playModalOpen();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    sfx.playSelect();
    const cmdLower = cmd.toLowerCase();
    const parts = cmdLower.split(' ');
    const base = parts[0];
    const arg = parts.slice(1).join(' ');

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      { id: `in-${Date.now()}`, type: 'input', text: `guest@cosmos-zacky:~$ ${cmd}` },
    ];

    switch (base) {
      case 'help':
        newLines.push({
          id: `out-${Date.now()}-1`,
          type: 'output',
          text: `AVAILABLE COMMANDS:\n  help        - Show this manual\n  about       - Overview about Muhammad Zacky\n  skills      - List core tech stack & competencies\n  projects    - List showcase engineering projects\n  project <n> - View deep dive for project 1-3\n  contact     - Display contact channels\n  theme <col> - Change accent: gold | cyan | emerald | purple | amber\n  sfx <state> - Toggle sound: on | off\n  scanlines   - Toggle retro CRT screen scanlines\n  matrix      - Stream falling matrix code effect\n  clear       - Clear screen history\n  easteregg   - Reveal secret 8-bit message\n  whoami      - Print current user session info`,
        });
        break;

      case 'about':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `DEV PROFILE:\nName: ${profile.name}\nRole: ${profile.title}\nStatus: Available for Opportunities\n\nBio: ${profile.bio}\n\nInterests: ${profile.interests.join(', ')}`,
        });
        break;

      case 'skills':
        const grouped = skills.reduce((acc, s) => {
          acc[s.category] = acc[s.category] || [];
          acc[s.category].push(s.name);
          return acc;
        }, {} as Record<string, string[]>);

        let skillOutput = 'CORE TECHNICAL STACK:\n';
        for (const [cat, items] of Object.entries(grouped)) {
          skillOutput += `\n[${cat.toUpperCase()}]\n${items.join('  •  ')}`;
        }
        newLines.push({ id: `out-${Date.now()}`, type: 'output', text: skillOutput });
        break;

      case 'projects':
        let projText = 'FEATURED PORTFOLIO PROJECTS:\n';
        projects.forEach((p, idx) => {
          projText += `\n[${idx + 1}] ${p.name} (${p.category})\n    ${p.shortDescription}\n    Stack: ${p.technologies.slice(0, 4).join(', ')}`;
        });
        projText += '\n\nTip: Type "project 1" to inspect project details.';
        newLines.push({ id: `out-${Date.now()}`, type: 'output', text: projText });
        break;

      case 'project':
        const num = parseInt(arg, 10);
        if (num >= 1 && num <= projects.length) {
          const p = projects[num - 1];
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'success',
            text: `PROJECT DETAILS: ${p.name.toUpperCase()}\nRole: ${p.role}\nCategory: ${p.category} | Status: ${p.status}\n\nProblem:\n  ${p.problem}\n\nSolution:\n  ${p.solution}\n\nKey Highlights:\n  ${p.features.map(f => '• ' + f).join('\n  ')}\n\nTechnologies:\n  ${p.technologies.join(', ')}`,
          });
        } else {
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'error',
            text: `Error: Please enter a valid project number between 1 and ${projects.length}. (Example: "project 1")`,
          });
        }
        break;

      case 'contact':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: `GET IN TOUCH:\nEmail:    ${profile.email}\nGitHub:   ${profile.github}\nLinkedIn: ${profile.linkedin}\nStatus:   Open to frontend, fullstack, and interactive web inquiries!`,
        });
        break;

      case 'theme':
        const themes = ['gold', 'cyan', 'emerald', 'purple', 'amber'];
        if (themes.includes(arg)) {
          onThemeChange?.(arg);
          sfx.playPowerUp();
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'success',
            text: `Theme accent switched to [${arg.toUpperCase()}]. Enjoy the fresh palette!`,
          });
        } else {
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'error',
            text: `Invalid theme. Available options: ${themes.join(', ')}`,
          });
        }
        break;

      case 'sfx':
        if (arg === 'on') {
          sfx.setEnabled(true);
          sfx.playPowerUp();
          newLines.push({ id: `out-${Date.now()}`, type: 'success', text: 'Sound effects enabled. [BEEP BOOP]' });
        } else if (arg === 'off') {
          sfx.setEnabled(false);
          newLines.push({ id: `out-${Date.now()}`, type: 'output', text: 'Sound effects muted.' });
        } else {
          const current = sfx.toggle();
          newLines.push({
            id: `out-${Date.now()}`,
            type: 'output',
            text: `Sound effects are now: ${current ? 'ENABLED' : 'MUTED'}`,
          });
        }
        break;

      case 'scanlines':
        onScanlinesToggle?.();
        sfx.playSelect();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: 'Toggled CRT retro scanline filter overlay.',
        });
        break;

      case 'matrix':
        sfx.playPowerUp();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: `01001011 01000101 01001001  // WAKE UP, VISITOR...\n01010000 01001001 01011000  // THE PIXELS HAVE YOU...\n01010001 01010101 01000101  // FOLLOW THE GOLDEN GLOW.`,
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'whoami':
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: `guest@cosmos-zacky [Muhammad Zacky Portfolio // Riau, Indonesia] (Permission: Read/Inspect)`,
        });
        break;

      case 'easteregg':
        sfx.playPowerUp();
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'success',
          text: `  ▲\n ▲ ▲  "It's dangerous to browse alone! Take this pixel portfolio."\n\nSecret Achievement Unlocked: [CONSOLE WIZARD] 🏆`,
        });
        break;

      default:
        newLines.push({
          id: `out-${Date.now()}`,
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" to see available instructions.`,
        });
        break;
    }

    setHistory(prev => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sfx.playKeypress();

    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: isMaximized ? '100vw' : 'min(640px, 96vw)',
        height: isMaximized ? '100vh' : '440px',
        zIndex: 300,
        background: 'rgba(10, 16, 24, 0.96)',
        backdropFilter: 'blur(12px)',
        borderTop: '2px solid var(--accent-gold)',
        borderLeft: isMaximized ? 'none' : '2px solid var(--accent-gold)',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'monospace',
        transition: 'height 0.25s ease, width 0.25s ease',
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          background: 'var(--bg-section)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TerminalIcon size={16} color="var(--accent-gold)" />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--text-gold)', letterSpacing: 0.5 }}>
            PIXEL TERMINAL // guest@pixelquest
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            onClick={() => setIsMaximized(m => !m)}
            style={{ padding: 4, color: 'var(--text-secondary)' }}
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>
          <button
            onClick={() => {
              sfx.playModalClose();
              onClose();
            }}
            style={{ padding: 4, color: 'var(--text-secondary)' }}
            title="Close Terminal"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '14px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        {history.map(item => (
          <div
            key={item.id}
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              color:
                item.type === 'input'
                  ? 'var(--accent-gold)'
                  : item.type === 'success'
                  ? 'var(--accent-green)'
                  : item.type === 'error'
                  ? '#FF6B6B'
                  : item.type === 'system'
                  ? 'var(--accent-blue)'
                  : 'var(--text-secondary)',
            }}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          background: 'rgba(16, 24, 32, 0.9)',
          borderTop: '1px solid var(--border)',
          gap: 8,
        }}
      >
        <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' for commands..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'monospace',
            fontSize: 14,
          }}
        />
        <button
          onClick={() => {
            executeCommand(inputVal);
            setInputVal('');
          }}
          style={{
            padding: '4px 8px',
            background: 'var(--accent-gold-dim)',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold)',
            borderRadius: 2,
            fontSize: 11,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <CornerDownLeft size={12} /> ENTER
        </button>
      </div>
    </div>
  );
};
