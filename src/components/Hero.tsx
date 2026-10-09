// ─── Hero Section: Muhammad Zacky (Space Pixel Theme) ────────────────────────

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/BrandIcons';
import { profile } from '../data/profile';
import { sfx } from '../utils/soundEffects';
import {
  SpaceMissionControlArtwork,
  PixelRocketIcon,
  PixelSatelliteIcon,
  PixelAstronautIcon,
} from './common/PixelArtGraphics';

// Floating pixel stars & cosmic space dust
const SpaceStarField: React.FC = () => {
  const stars = React.useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: ((i * 13 + 7) * 173) % 100,
    y: ((i * 17 + 3) * 131) % 100,
    size: (i % 3) + 1,
    delay: (i * 0.25) % 4,
    dur: 2 + (i % 3) * 1.2,
  })), []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size * 2.5,
            height: s.size * 2.5,
            background: s.id % 4 === 0 ? 'var(--accent-gold)' : s.id % 4 === 1 ? 'var(--accent-blue)' : s.id % 4 === 2 ? '#C084FC' : '#FFFFFF',
            imageRendering: 'pixelated',
            opacity: 0.45,
            animation: `twinkle ${s.dur}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  const labelRef = useRef<HTMLDivElement>(null);

  // Typing animation for space telemetry label
  useEffect(() => {
    const label = labelRef.current;
    if (!label) return;
    const text = label.getAttribute('data-text') || '';
    label.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      label.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 90,
        paddingBottom: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SpaceStarField />

      {/* Cosmic Nebula Glow Behind Hero */}
      <div style={{
        position: 'absolute',
        top: '25%', left: '65%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(192,132,252,0.12) 0%, rgba(56,189,248,0.06) 50%, transparent 75%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '65%', left: '15%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(252,211,77,0.08) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 48,
          alignItems: 'center',
        }}>
          {/* Left: Text & Bio Content */}
          <div style={{ animation: 'fadeInUp 0.7s ease both' }}>
            {/* Space Telemetry Label */}
            <div style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 9,
              color: 'var(--accent-gold)',
              letterSpacing: 2,
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}>
              <PixelSatelliteIcon size={20} />
              <span
                ref={labelRef}
                data-text="COSMOS_TELEMETRY // INFORMATICS • CLASS D • UIN SUSKA RIAU"
                style={{ minHeight: 12 }}
              />
              <span className="animate-blink" style={{ color: 'var(--accent-gold)' }}>▌</span>
            </div>

            {/* Main Tagline Heading */}
            <h1 style={{
              fontSize: 'clamp(28px, 4.8vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 14,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-pixel-sans)',
            }}>
              Developer by Logic,{' '}
              <span style={{
                color: 'var(--accent-gold)',
                display: 'inline-block',
                textShadow: '0 0 20px rgba(252,211,77,0.3)',
              }}>
                Creator by Passion.
              </span>
            </h1>

            {/* Sub-tagline badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 12px',
              background: 'rgba(56,189,248,0.1)',
              border: '1px solid var(--accent-blue)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, background: 'var(--accent-blue)', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--accent-blue)' }}>
                {profile.taglineAlt || 'Turning Ideas into Digital Experiences.'}
              </span>
            </div>

            {/* Hero Bio Description */}
            <p style={{
              fontSize: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 540,
            }}>
              Halo, saya <strong style={{ color: 'var(--text-primary)' }}>{profile.name}</strong>, mahasiswa Teknik Informatika di <span style={{ color: 'var(--accent-gold)' }}>UIN Sultan Syarif Kasim Riau</span> yang memiliki ketertarikan dalam pengembangan aplikasi web, backend development, perancangan antarmuka, dan teknologi digital.
              Terbiasa membangun REST API dan sistem web terstruktur menggunakan <span style={{ color: 'var(--accent-blue)' }}>Laravel, PHP, React, JavaScript, dan MySQL</span>.
            </p>

            {/* 3 Call to Action Buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              {/* Button 1: Explore My Projects */}
              <a
                href="#projects"
                className="btn btn-primary"
                id="btn-hero-projects"
                onClick={e => {
                  e.preventDefault();
                  sfx.playSelect();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44 }}
              >
                <PixelRocketIcon size={20} />
                <span>Explore My Projects</span>
                <ArrowRight size={15} />
              </a>

              {/* Button 2: About Me */}
              <a
                href="#about"
                className="btn btn-outline"
                id="btn-hero-about"
                onClick={e => {
                  e.preventDefault();
                  sfx.playSelect();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44 }}
              >
                <PixelAstronautIcon size={20} />
                <span>About Me</span>
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="btn btn-ghost"
                id="btn-hero-contact"
                onClick={e => {
                  e.preventDefault();
                  sfx.playSelect();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  minHeight: 44,
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Mail size={16} color="var(--accent-green)" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Skills Orbit Pills & Socials */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span className="pixel-badge" style={{ borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>
                LARAVEL &amp; PHP
              </span>
              <span className="pixel-badge" style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
                REACT &amp; TS
              </span>
              <span className="pixel-badge" style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
                MYSQL DB
              </span>
              <span className="pixel-badge" style={{ borderColor: '#C084FC', color: '#C084FC' }}>
                RIAU, ID
              </span>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-hero-github"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-hero-linkedin"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <LinkedinIcon size={14} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Retro Space Mission Control Artwork */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeInUp 0.9s ease 0.2s both',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                width: '100%',
                maxWidth: 480,
                background: 'var(--bg-section)',
                border: '2px solid var(--border)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.7), 0 0 24px rgba(56,189,248,0.15)',
                animation: 'float 5s ease-in-out infinite',
                padding: 12,
              }}
            >
              {/* Retro Space Window Titlebar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 8,
                borderBottom: '1px solid var(--border)',
                marginBottom: 8,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 8, height: 8, background: '#EF4444', imageRendering: 'pixelated' }} />
                  <div style={{ width: 8, height: 8, background: '#F59E0B', imageRendering: 'pixelated' }} />
                  <div style={{ width: 8, height: 8, background: '#10B981', imageRendering: 'pixelated' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="pixel-xxs text-cyan">COSMOS_STATION.EXE</span>
                  <span className="pixel-badge" style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)', fontSize: 8 }}>
                    ORBIT: STABLE
                  </span>
                </div>
              </div>

              {/* Space Mission Control Vector Illustration */}
              <div style={{ width: '100%', height: 230, position: 'relative', overflow: 'hidden' }}>
                <SpaceMissionControlArtwork />
              </div>

              {/* Bottom telemetry status feed */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 8,
                borderTop: '1px solid var(--border)',
                marginTop: 8,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 6, height: 6, background: 'var(--accent-green)', imageRendering: 'pixelated' }} />
                  <span className="pixel-xxs text-green">TELEMETRY: NOMINAL</span>
                </div>
                <span className="pixel-xxs text-muted">STATION // RIAU SECTOR 04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: -32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          color: 'var(--text-muted)',
          fontSize: 12,
          animation: 'float 2.5s ease-in-out infinite',
        }}>
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Mobile responsive styling for Hero */}
      <style>{`
        @media (max-width: 860px) {
          #home .container > div {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          #home .container > div > div:last-child {
            order: -1;
          }
          #home .container > div > div:last-child > div {
            max-width: 100% !important;
            padding: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
