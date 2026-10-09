// ─── Skills Section: Muhammad Zacky (Space Pixel Theme) ────────────────────────
// Strictly verified skills without fake percentages or exaggerated claims.

import React, { useState } from 'react';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import { PixelTechIcon, PixelPlanetSaturnIcon } from './common/PixelArtGraphics';
import { sfx } from '../utils/soundEffects';
import type { SkillCategory, Skill } from '../types';

const CATEGORIES: { id: SkillCategory | 'all'; label: string; icon: string; color: string }[] = [
  { id: 'all',                               label: 'All Skills',        icon: '🪐', color: 'var(--accent-gold)' },
  { id: 'Backend Development',               label: 'Backend Dev',       icon: '⚙️', color: 'var(--accent-blue)' },
  { id: 'Frontend Development',              label: 'Frontend Dev',      icon: '💻', color: 'var(--accent-green)' },
  { id: 'Database Management',               label: 'Database',          icon: '🗄️', color: 'var(--accent-gold)' },
  { id: 'UI/UX Design',                      label: 'UI/UX Design',      icon: '🎨', color: '#F87171' },
  { id: 'Data Mining & Machine Learning',    label: 'Data Mining & ML',  icon: '🔬', color: '#C084FC' },
  { id: 'Creative Design & Digital Content', label: 'Creative Content',  icon: '✨', color: '#F472B6' },
  { id: 'Tools & Workflow',                  label: 'Tools & Workflow',  icon: '🛠️', color: 'var(--text-secondary)' },
];

const CAT_COLORS: Record<SkillCategory, string> = {
  'Backend Development': 'var(--accent-blue)',
  'Frontend Development': 'var(--accent-green)',
  'Database Management': 'var(--accent-gold)',
  'UI/UX Design': '#F87171',
  'Data Mining & Machine Learning': '#C084FC',
  'Creative Design & Digital Content': '#F472B6',
  'Tools & Workflow': 'var(--text-secondary)',
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skills[0]);

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const handleCategorySelect = (catId: SkillCategory | 'all') => {
    sfx.playSelect();
    setActiveCategory(catId);
  };

  const handleSkillClick = (skill: Skill) => {
    sfx.playSelect();
    setSelectedSkill(skill);
  };

  // Check related projects
  const relatedProjects = selectedSkill
    ? projects.filter(p =>
        p.technologies.some(t =>
          t.toLowerCase().includes(selectedSkill.name.toLowerCase()) ||
          selectedSkill.name.toLowerCase().includes(t.toLowerCase())
        )
      )
    : [];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 44 }}>
          <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <PixelPlanetSaturnIcon size={16} />
            <span>COSMIC_MODULES // VERIFIED TECHNICAL STACK</span>
          </div>
          <h2 className="section-title">Keahlian &amp; Teknologi</h2>
          <p className="section-subtitle">
            Daftar teknologi, framework, dan metodologi yang benar-benar pernah dipelajari, dipraktikkan, dan diimplementasikan dalam proyek nyata.
          </p>
        </div>

        {/* Category Filter Pills (Horizontal scroll on mobile) */}
        <div style={{
          display: 'flex',
          gap: 8,
          marginBottom: 32,
          overflowX: 'auto',
          paddingBottom: 8,
          WebkitOverflowScrolling: 'touch',
        }}>
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                style={{
                  padding: '7px 14px',
                  background: isActive ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                  border: `1px solid ${isActive ? cat.color : 'var(--border)'}`,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 12,
                  fontFamily: 'var(--font-pixel-sans)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  flexShrink: 0,
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {isActive && (
                  <span style={{
                    width: 5, height: 5,
                    background: cat.color,
                    borderRadius: '50%',
                    marginLeft: 2,
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Grid: Skills Matrix + Interactive Inspector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: 28,
          alignItems: 'start',
        }}>
          {/* Left: Skills Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 12,
          }}>
            {filtered.map(skill => {
              const isSelected = selectedSkill?.id === skill.id;
              const catColor = CAT_COLORS[skill.category] || 'var(--accent-gold)';

              return (
                <div
                  key={skill.id}
                  onClick={() => handleSkillClick(skill)}
                  className="pixel-box-clean pixel-card-hover"
                  style={{
                    padding: 12,
                    background: isSelected ? 'rgba(56,189,248,0.08)' : 'var(--bg-surface)',
                    border: `1.5px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    position: 'relative',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={() => sfx.playBlip()}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                    <div style={{
                      width: 32, height: 32,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                      borderRadius: 2,
                    }}>
                      <PixelTechIcon name={skill.name} size={20} />
                    </div>
                    {skill.statusBadge && (
                      <span style={{
                        fontSize: 9,
                        fontFamily: 'var(--font-pixel)',
                        color: catColor,
                        padding: '2px 5px',
                        background: 'rgba(0,0,0,0.25)',
                        border: `1px solid ${catColor}`,
                        borderRadius: 2,
                      }}>
                        {skill.statusBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <div style={{
                      fontFamily: 'var(--font-pixel-sans)',
                      fontWeight: 700,
                      fontSize: 14,
                      color: isSelected ? 'var(--accent-blue)' : 'var(--text-primary)',
                      marginBottom: 2,
                    }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                      {skill.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Skill Telemetry Inspector */}
          {selectedSkill && (
            <div
              className="pixel-box"
              style={{
                padding: 20,
                background: 'var(--bg-section)',
                position: 'sticky',
                top: 90,
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
                borderBottom: '1px solid var(--border)',
                marginBottom: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PixelTechIcon name={selectedSkill.name} size={28} />
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-pixel-sans)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.2,
                    }}>
                      {selectedSkill.name}
                    </h3>
                    <span className="pixel-xxs text-muted">{selectedSkill.category}</span>
                  </div>
                </div>
                {selectedSkill.statusBadge && (
                  <span className="pixel-badge" style={{
                    borderColor: CAT_COLORS[selectedSkill.category] || 'var(--accent-gold)',
                    color: CAT_COLORS[selectedSkill.category] || 'var(--accent-gold)',
                  }}>
                    {selectedSkill.statusBadge}
                  </span>
                )}
              </div>

              {/* Description */}
              <div style={{ marginBottom: 18 }}>
                <div className="pixel-xxs text-gold" style={{ marginBottom: 6 }}>DESKRIPSI &amp; PENGGUNAAN</div>
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {selectedSkill.description}
                </p>
              </div>

              {/* Practical Verification / Implemented In */}
              <div>
                <div className="pixel-xxs text-green" style={{ marginBottom: 8 }}>DIIMPLEMENTASIKAN DALAM:</div>
                {relatedProjects.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {relatedProjects.map(p => (
                      <a
                        key={p.id}
                        href={`#card-project-${p.id}`}
                        onClick={e => {
                          e.preventDefault();
                          sfx.playSelect();
                          document.getElementById(`card-project-${p.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                          padding: '8px 12px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-gold)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                      >
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
                            {p.name}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                            {p.role} · {p.category}
                          </div>
                        </div>
                        <span className="pixel-xxs text-gold">LIHAT &gt;</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    padding: 10,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)',
                    borderRadius: 2,
                    fontSize: 12,
                    color: 'var(--text-muted)',
                  }}>
                    Dipraktikkan dalam eksplorasi modul akademik &amp; latihan implementasi mandiri.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #skills .container > div:last-child > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
};
