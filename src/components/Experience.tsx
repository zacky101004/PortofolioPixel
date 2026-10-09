import React from 'react';
import { experiences } from '../data/experience';
import { PixelMeteorIcon } from './common/PixelArtGraphics';

const TYPE_CONFIG: Record<string, { icon: string; color: string; label: string }> = {
  internship:   { icon: '💼', color: 'var(--accent-blue)',   label: 'KERJA PRAKTIK' },
  organization: { icon: '🏛️', color: 'var(--accent-green)',  label: 'PENGABDIAN'    },
  academic:     { icon: '🎓', color: 'var(--accent-gold)',   label: 'AKADEMIK'      },
  other:        { icon: '📋', color: 'var(--text-secondary)', label: 'LAINNYA'        },
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <PixelMeteorIcon size={16} />
            <span>ORBITAL_TIMELINE // REAL-WORLD TRACK RECORD</span>
          </div>
          <h2 className="section-title">Pengalaman</h2>
          <p className="section-subtitle">
            Rekam jejak kerja praktik pengembangan sistem di instansi kementerian dan kontribusi pengabdian masyarakat di lapangan.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 48 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 19, top: 8, bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent-gold), rgba(244,201,93,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => {
              const type = TYPE_CONFIG[exp.type] || TYPE_CONFIG.other;
              return (
                <div
                  key={exp.id}
                  style={{
                    position: 'relative',
                    animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: -37,
                    top: 8,
                    width: 10,
                    height: 10,
                    background: type.color,
                    border: '2px solid var(--bg-base)',
                    imageRendering: 'pixelated',
                    boxShadow: `0 0 0 2px ${type.color}50`,
                  }} />

                  {/* Content card */}
                  <div className="pixel-box" style={{ padding: '20px 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 18 }}>{type.icon}</span>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
                            {exp.title}
                          </h3>
                        </div>
                        <div style={{ fontSize: 13, color: type.color, fontWeight: 500 }}>
                          {exp.organization}
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                        <span className="pixel-xxs" style={{ color: 'var(--text-muted)' }}>{exp.period}</span>
                        <span
                          className="pixel-tag"
                          style={{
                            color: type.color,
                            borderColor: `${type.color}50`,
                            background: `${type.color}15`,
                          }}
                        >
                          {type.label}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 14 }}>
                      {exp.description}
                    </p>

                    {/* Outcomes */}
                    {exp.outcomes.length > 0 && (
                      <div style={{ marginBottom: exp.technologies && exp.technologies.length > 0 ? 14 : 0 }}>
                        <div className="pixel-xxs text-muted" style={{ marginBottom: 8 }}>KEY OUTCOMES</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                          {exp.outcomes.map(o => (
                            <div key={o} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: 2, fontSize: 12 }}>✓</span>
                              <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                        {exp.technologies.map(t => (
                          <span key={t} className="tech-badge" style={{ fontSize: 11 }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 480px) {
          #experience .container > div:last-child {
            padding-left: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};
