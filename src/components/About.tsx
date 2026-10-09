import React from 'react';
import { BookOpen, Sparkles, Compass, CheckCircle2, Terminal } from 'lucide-react';
import { profile } from '../data/profile';
import {
  PixelAvatarFull,
  PixelDualMonitorIcon,
  PixelKeyboardIcon,
  PixelHeadphoneIcon,
  PixelCoffeeIcon,
  PixelFloppyIcon,
  PixelCatIcon,
  PixelAstronautIcon,
  PixelSatelliteIcon,
} from './common/PixelArtGraphics';
import { sfx } from '../utils/soundEffects';

export const About: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 44 }}>
          <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <PixelAstronautIcon size={16} />
            <span>ASTRONAUT_DOSSIER // IDENTITY &amp; CORE FOCUS</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Mahasiswa Teknik Informatika yang memadukan logika rekayasa perangkat lunak, arsitektur backend, dan estetika antarmuka digital.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* Left Column: Character Avatar + Cosmic Identity Dossier */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Avatar Frame */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '2px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}>
              {/* High-Fidelity Pixel Character Avatar */}
              <div style={{ width: 170, height: 170, marginBottom: 10 }}>
                <PixelAvatarFull size={170} />
              </div>

              {/* Status Badge */}
              <div style={{
                background: 'rgba(8,11,20,0.95)',
                border: '1px solid var(--accent-gold)',
                padding: '4px 14px',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <div style={{ width: 6, height: 6, background: 'var(--accent-green)', borderRadius: '50%' }} />
                <span className="pixel-xxs text-gold">MAHASISWA S1 // KELAS D</span>
              </div>
            </div>

            {/* Space Cadet Identity Dossier */}
            <div className="pixel-box" style={{ padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Terminal size={15} color="var(--accent-blue)" />
                <div className="pixel-xxs text-blue" style={{ letterSpacing: 1 }}>IDENTITAS DIRI</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                <div>
                  <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>NAMA LENGKAP</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{profile.name}</div>
                </div>

                <div>
                  <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>PERGURUAN TINGGI</div>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{profile.university}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div>
                    <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>PROGRAM STUDI</div>
                    <div style={{ color: 'var(--text-primary)' }}>{profile.major}</div>
                  </div>
                  <div>
                    <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>KELAS</div>
                    <div style={{ color: 'var(--accent-green)', fontWeight: 700 }}>{profile.classGrade}</div>
                  </div>
                </div>

                <div>
                  <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>LOKASI</div>
                  <div style={{ color: 'var(--text-secondary)' }}>📍 {profile.location}</div>
                </div>

                <div>
                  <div className="pixel-xxs text-muted" style={{ marginBottom: 2 }}>BIDANG UTAMA</div>
                  <span className="pixel-badge" style={{ borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>
                    {profile.primaryField}
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Domains Card */}
            <div className="pixel-box" style={{ padding: 16 }}>
              <div className="pixel-xxs text-gold" style={{ marginBottom: 10 }}>FOKUS &amp; BIDANG PENDUKUNG</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[...profile.focusAreas, ...profile.supportingFields].map((field, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: 11,
                      padding: '3px 8px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 2,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narratives + Soft Skills + Career Mission + Loadout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Bio Narrative Section */}
            <div>
              <div className="section-label" style={{ marginBottom: 8 }}>TENTANG SAYA</div>
              <h3 style={{
                fontSize: 'clamp(20px, 3vw, 26px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 16,
                fontFamily: 'var(--font-pixel-sans)',
              }}>
                Membangun Solusi Digital dengan Logika, Empati, dan Pemahaman Masalah.
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {profile.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Sparkles size={16} color="var(--accent-gold)" />
                <div className="pixel-xxs text-gold">SOFT SKILLS &amp; WORKING PRINCIPLES</div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 12,
              }}>
                {profile.softSkills.map((item, idx) => {
                  const [title, desc] = item.split('—');
                  return (
                    <div
                      key={idx}
                      className="pixel-box"
                      style={{
                        padding: 14,
                        background: 'var(--bg-surface)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-primary)', marginBottom: 2 }}>
                          {title.trim()}
                        </div>
                        {desc && (
                          <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            {desc.trim()}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Career Mission / Tujuan Karier */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Compass size={16} color="var(--accent-blue)" />
                <div className="pixel-xxs text-blue">TUJUAN KARIER &amp; ARAH PENGEMBANGAN</div>
              </div>

              <div className="pixel-box" style={{ padding: 18, background: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {profile.careerMission.map((mission, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span className="pixel-xxs text-gold" style={{ marginTop: 2, flexShrink: 0 }}>
                        [{idx + 1}]
                      </span>
                      <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education History */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <BookOpen size={16} color="var(--accent-green)" />
                <div className="pixel-xxs text-green">RIWAYAT PENDIDIKAN</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {profile.education.map(edu => (
                  <div
                    key={edu.institution}
                    className="pixel-box"
                    style={{ padding: 18, background: 'var(--bg-surface)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
                          {edu.degree} · {edu.field}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--accent-gold)', marginTop: 2 }}>
                          {edu.institution}
                        </div>
                      </div>
                      <span className="pixel-badge" style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Space Engineering Station Hardware Loadout */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PixelSatelliteIcon size={18} />
                  <div className="pixel-xxs text-gold">SPACE MISSION LOADOUT // HARDWARE &amp; GEAR</div>
                </div>
                <span className="pixel-badge" style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)', fontSize: 10 }}>
                  SLOTS: 6/6
                </span>
              </div>

              <div className="pixel-box" style={{ padding: 16 }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 12,
                }}>
                  {[
                    {
                      name: 'Dual Orbit Displays',
                      desc: '4K IPS High-DPI Viewports',
                      icon: <PixelDualMonitorIcon size={34} />,
                      tier: 'LEGENDARY',
                      tierColor: 'var(--accent-gold)',
                    },
                    {
                      name: 'Mechanical Keeb',
                      desc: 'Lubed Linear Switches (120 WPM)',
                      icon: <PixelKeyboardIcon size={34} />,
                      tier: 'EPIC',
                      tierColor: '#A78BFA',
                    },
                    {
                      name: 'Cosmic Comms Cans',
                      desc: 'Noise Isolation + Focus Wave',
                      icon: <PixelHeadphoneIcon size={34} />,
                      tier: 'RARE',
                      tierColor: 'var(--accent-blue)',
                    },
                    {
                      name: 'Caffeine Brewer',
                      desc: '+50% Focus & Build Velocity',
                      icon: <PixelCoffeeIcon size={34} />,
                      tier: 'UNCOMMON',
                      tierColor: 'var(--accent-green)',
                    },
                    {
                      name: 'Satellite Archives',
                      desc: 'Air-Gapped Dotfiles & Cold Stores',
                      icon: <PixelFloppyIcon size={34} />,
                      tier: 'RARE',
                      tierColor: 'var(--accent-blue)',
                    },
                    {
                      name: 'Cadet Byte (Cat)',
                      desc: 'Bug Hunter & Moral Support',
                      icon: <PixelCatIcon size={34} />,
                      tier: 'MYTHIC',
                      tierColor: '#F59E0B',
                    },
                  ].map((gear, idx) => (
                    <div
                      key={idx}
                      className="pixel-box-clean pixel-card-hover"
                      style={{
                        padding: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        background: 'rgba(255,255,255,0.02)',
                        border: '2px solid var(--border)',
                        cursor: 'default',
                      }}
                      onMouseEnter={() => sfx.playBlip()}
                    >
                      <div style={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid var(--border)',
                      }}>
                        {gear.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4, marginBottom: 2 }}>
                          <span style={{ fontFamily: 'var(--font-pixel-sans)', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>
                            {gear.name}
                          </span>
                          <span style={{ fontSize: 9, fontFamily: 'var(--font-pixel)', color: gear.tierColor }}>
                            {gear.tier}
                          </span>
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                          {gear.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #about .container > div:last-child > div:first-child {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
