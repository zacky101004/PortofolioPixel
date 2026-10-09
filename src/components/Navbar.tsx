import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Volume2, VolumeX, Monitor, Palette } from 'lucide-react';
import { sfx } from '../utils/soundEffects';
import { PixelRocketIcon } from './common/PixelArtGraphics';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

const THEME_OPTIONS = [
  { id: 'gold',    name: 'Cosmic Gold',    color: '#FCD34D' },
  { id: 'cyan',    name: 'Cyber Orbit',    color: '#38BDF8' },
  { id: 'emerald', name: 'Alien Emerald',  color: '#4ADE80' },
  { id: 'purple',  name: 'Nebula Purple',  color: '#C084FC' },
  { id: 'amber',   name: 'Solar Flare',    color: '#FB923C' },
];

interface NavbarProps {
  onOpenTerminal: () => void;
  activeTheme: string;
  onThemeChange: (theme: string) => void;
  scanlinesActive: boolean;
  onToggleScanlines: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  activeTheme,
  onThemeChange,
  scanlinesActive,
  onToggleScanlines,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [sfxEnabled, setSfxEnabled] = useState(sfx.isEnabled());

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    sfx.playSelect();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleSfx = () => {
    const newVal = sfx.toggle();
    setSfxEnabled(newVal);
  };

  const handleSelectTheme = (themeId: string) => {
    sfx.playPowerUp();
    onThemeChange(themeId);
    setThemeMenuOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        borderBottomColor: scrolled ? 'rgba(36,51,84,0.8)' : 'transparent',
        background: scrolled ? 'rgba(8,11,20,0.95)' : 'rgba(8,11,20,0.85)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            sfx.playSelect();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          id="nav-logo"
        >
          {/* Space Rocket Logo */}
          <div style={{
            width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-elevated)',
            border: '1.5px solid var(--accent-gold)',
            borderRadius: 2,
            flexShrink: 0,
          }}>
            <PixelRocketIcon size={24} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--text-primary)', letterSpacing: 1 }}>
              ZACKY.DEV
            </span>
            <span className="pixel-xxs" style={{ color: 'var(--accent-gold)' }}>COSMOS PORTFOLIO</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              onMouseEnter={() => sfx.playBlip()}
              style={{
                padding: '6px 14px',
                fontSize: 14,
                fontWeight: 500,
                color: activeSection === link.href.slice(1) ? 'var(--accent-gold)' : 'var(--text-secondary)',
                borderRadius: 'var(--radius-md)',
                transition: 'color 0.2s, background 0.2s',
                position: 'relative',
              }}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span style={{
                  position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)',
                  width: 18, height: 2, background: 'var(--accent-gold)', borderRadius: 1,
                }} />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Interactive Tools & Controls */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Sound FX Toggle */}
          <button
            onClick={handleToggleSfx}
            className="btn btn-ghost btn-sm"
            style={{
              padding: '6px 10px',
              color: sfxEnabled ? 'var(--accent-gold)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
            title={sfxEnabled ? 'Sound Effects Active (Click to Mute)' : 'Sound Effects Muted (Click to Enable)'}
            aria-label="Toggle sound effects"
          >
            {sfxEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="pixel-xxs">{sfxEnabled ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          {/* CRT Scanlines Toggle */}
          <button
            onClick={() => {
              sfx.playSelect();
              onToggleScanlines();
            }}
            className="btn btn-ghost btn-sm"
            style={{
              padding: '6px 10px',
              color: scanlinesActive ? 'var(--accent-green)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
            title="Toggle CRT Retro Scanline Filter"
            aria-label="Toggle CRT Scanlines"
          >
            <Monitor size={15} />
            <span className="pixel-xxs">CRT</span>
          </button>

          {/* Theme Palette Switcher Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                sfx.playSelect();
                setThemeMenuOpen(t => !t);
              }}
              className="btn btn-ghost btn-sm"
              style={{
                padding: '6px 10px',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
              title="Change Theme Accent Color"
            >
              <Palette size={15} color="var(--accent-gold)" />
              <div style={{ width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%' }} />
            </button>

            {themeMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  background: 'var(--bg-section)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  minWidth: 160,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                  zIndex: 100,
                }}
              >
                <div className="pixel-xxs text-muted" style={{ padding: '4px 8px' }}>PALETTE PRESETS</div>
                {THEME_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectTheme(opt.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '6px 8px',
                      borderRadius: 2,
                      background: activeTheme === opt.id ? 'var(--bg-surface)' : 'transparent',
                      color: activeTheme === opt.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontSize: 12,
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ width: 10, height: 10, background: opt.color, borderRadius: 2 }} />
                    <span>{opt.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Terminal Button */}
          <button
            onClick={() => {
              sfx.playSelect();
              onOpenTerminal();
            }}
            className="btn btn-outline btn-sm"
            id="btn-nav-terminal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              borderColor: 'var(--accent-gold)',
              color: 'var(--text-gold)',
            }}
            title="Open Interactive Developer Terminal (~)"
          >
            <Terminal size={14} />
            <span className="pixel-xxs">CLI</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            id="btn-nav-contact"
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => {
              sfx.playSelect();
              onOpenTerminal();
            }}
            className="btn btn-outline btn-sm"
            style={{ display: 'none', padding: '6px 8px' }}
            id="btn-mobile-cli"
          >
            <Terminal size={14} />
          </button>

          <button
            className="btn-ghost"
            id="btn-mobile-menu"
            onClick={() => {
              sfx.playSelect();
              setMenuOpen(m => !m);
            }}
            aria-label="Toggle navigation menu"
            style={{ display: 'none', padding: '8px' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(8,11,20,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              style={{
                padding: '10px 12px',
                fontSize: 15,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                borderRadius: 'var(--radius-md)',
                display: 'block',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Tools Row */}
          <div style={{ borderTop: '1px solid var(--border)', marginTop: 8, paddingTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={handleToggleSfx}
              className="btn btn-outline btn-sm"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              {sfxEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />} {sfxEnabled ? 'SFX ON' : 'SFX OFF'}
            </button>
            <button
              onClick={onToggleScanlines}
              className="btn btn-outline btn-sm"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <Monitor size={14} /> CRT MODE
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenTerminal();
              }}
              className="btn btn-outline btn-sm"
              style={{ flex: 1, justifyContent: 'center', borderColor: 'var(--accent-gold)', color: 'var(--text-gold)' }}
            >
              <Terminal size={14} /> CLI SHELL
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          #btn-mobile-menu { display: flex !important; }
          #btn-mobile-cli { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};
