// ─── Contact Section ──────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { Mail, Download, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/BrandIcons';
import { profile } from '../data/profile';
import { sfx } from '../utils/soundEffects';

interface ContactLink {
  id: string;
  label: string;
  sublabel: string;
  icon: React.JSX.Element;
  href: string;
  color: string;
  external: boolean;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMsg, setSenderMsg] = useState('');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      sfx.playSuccess();
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderMsg) return;
    sfx.playSuccess();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setSenderName('');
      setSenderMsg('');
    }, 4000);
  };

  const rawLinks = [
    profile.email ? {
      id: 'btn-contact-email',
      label: profile.email,
      sublabel: 'Send an email directly',
      icon: <Mail size={20} />,
      href: `mailto:${profile.email}?subject=Hello from PixelQuest Portfolio!`,
      color: 'var(--accent-gold)',
      external: false,
    } : null,
    profile.github ? {
      id: 'btn-contact-github',
      label: 'GitHub Profile',
      sublabel: profile.github.replace('https://github.com/', '@'),
      icon: <GithubIcon size={20} />,
      href: profile.github,
      color: 'var(--text-primary)',
      external: true,
    } : null,
    profile.linkedin ? {
      id: 'btn-contact-linkedin',
      label: 'LinkedIn Connection',
      sublabel: 'Professional network & messaging',
      icon: <LinkedinIcon size={20} />,
      href: profile.linkedin,
      color: 'var(--accent-blue)',
      external: true,
    } : null,
  ];
  const contactLinks: ContactLink[] = rawLinks.filter((x): x is ContactLink => x !== null);

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              TRANSMITTER // GET IN TOUCH
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: 'clamp(24px, 4vw, 36px)' }}>
              Have a project in mind? Let's build something meaningful together.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginTop: 12 }}>
              Interested in collaborating or discussing a project? Feel free to reach out. Berdomisili di <strong>Riau, Indonesia</strong> — terbuka untuk peluang magang, freelance, dan kolaborasi pengembangan aplikasi web.
            </p>
          </div>

          {/* Pixel art mail illustration */}
          <div style={{ marginBottom: 36, display: 'flex', justifyContent: 'center' }}>
            <PixelMailIllustration />
          </div>

          {/* Quick Copy Email Action */}
          <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleCopyEmail}
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 14,
                padding: '10px 20px',
                borderColor: copied ? 'var(--accent-green)' : 'var(--accent-gold)',
                color: copied ? 'var(--accent-green)' : 'var(--text-gold)',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'EMAIL COPIED TO CLIPBOARD! (+10 EXP)' : `COPY EMAIL (${profile.email})`}
            </button>
          </div>

          {/* Contact cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 36 }}>
            {contactLinks.map(link => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => sfx.playSelect()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '16px 18px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={e => {
                  sfx.playBlip();
                  e.currentTarget.style.borderColor = link.color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 42, height: 42,
                  background: 'var(--bg-elevated)',
                  border: `1px solid ${link.color}40`,
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: link.color, flexShrink: 0,
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{link.sublabel}</div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              </a>
            ))}
          </div>

          {/* Interactive Quick Note Dispatcher */}
          <div className="pixel-box" style={{ padding: '24px', textAlign: 'left', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Send size={16} color="var(--accent-gold)" />
              <div className="pixel-xxs text-gold">DISPATCH QUICK MESSAGE</div>
            </div>

            {messageSent ? (
              <div style={{
                padding: '24px',
                background: 'rgba(117, 183, 152, 0.1)',
                border: '1px solid var(--accent-green)',
                borderRadius: 2,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🚀</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent-green)', marginBottom: 4 }}>
                  Message Transmitted Successfully!
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I'll get back to you promptly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                  <div>
                    <label className="pixel-xxs text-muted" style={{ display: 'block', marginBottom: 6 }}>YOUR NAME / ORGANIZATION</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Design Studio)"
                      value={senderName}
                      onChange={e => {
                        sfx.playKeypress();
                        setSenderName(e.target.value);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        borderRadius: 2,
                        outline: 'none',
                        fontSize: 13,
                        fontFamily: 'var(--font-body)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="pixel-xxs text-muted" style={{ display: 'block', marginBottom: 6 }}>YOUR EMAIL OR HANDLE</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. alex@example.com"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        borderRadius: 2,
                        outline: 'none',
                        fontSize: 13,
                        fontFamily: 'var(--font-body)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="pixel-xxs text-muted" style={{ display: 'block', marginBottom: 6 }}>MESSAGE TRANSMISSION</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={senderMsg}
                    onChange={e => {
                      sfx.playKeypress();
                      setSenderMsg(e.target.value);
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--bg-base)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      borderRadius: 2,
                      outline: 'none',
                      fontSize: 13,
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}
                  >
                    <Send size={14} /> Send Message Dispatch
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* CV download & Response indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                id="btn-download-cv-contact"
                className="btn btn-outline btn-sm"
                onClick={() => sfx.playSelect()}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Download size={15} /> Download Full Resume
              </a>
            )}

            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 2,
            }}>
              <span style={{ width: 7, height: 7, background: 'var(--accent-green)', borderRadius: '50%' }} />
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                Guaranteed response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pixel mail illustration
const PixelMailIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 180, imageRendering: 'pixelated' }} aria-hidden="true">
    {/* Envelope body */}
    <rect x="20" y="30" width="120" height="56" rx="2" fill="#202E3A" stroke="#344655" strokeWidth="2" />
    <path d="M20 30 L80 70 L140 30" fill="none" stroke="#344655" strokeWidth="2" />
    <path d="M20 30 L80 10 L140 30" fill="#18232D" stroke="#344655" strokeWidth="2" />
    {/* Letter inside */}
    <rect x="40" y="48" width="80" height="32" rx="1" fill="#F4F0E6" />
    <rect x="46" y="54" width="48" height="3" rx="1" fill="#AAB7C4" />
    <rect x="46" y="61" width="40" height="3" rx="1" fill="#AAB7C4" />
    <rect x="46" y="68" width="32" height="3" rx="1" fill="#AAB7C4" />
    {/* Gold seal */}
    <rect x="86" y="70" width="12" height="12" rx="6" fill="#F4C95D" />
    <rect x="88" y="72" width="8" height="8" rx="4" fill="#D4A030" />
    {/* Floating stars */}
    <rect x="8" y="20" width="6" height="6" fill="#F4C95D" opacity="0.6" />
    <rect x="148" y="18" width="4" height="4" fill="#F4C95D" opacity="0.6" />
    <rect x="152" y="60" width="4" height="4" fill="#76B7E5" opacity="0.5" />
    <rect x="4" y="52" width="4" height="4" fill="#76B7E5" opacity="0.5" />
  </svg>
);
