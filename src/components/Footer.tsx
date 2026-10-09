import React from 'react';
import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './common/BrandIcons';
import { profile } from '../data/profile';
import { PixelRocketIcon } from './common/PixelArtGraphics';

const FOOTER_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-base)',
      padding: '40px 0 24px',
    }}>
      <div className="container">
        {/* Pixel divider */}
        <div className="pixel-divider" style={{ marginBottom: 32 }}>
          <span>★</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Logo */}
          <div>
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 8 }}
              id="footer-logo"
            >
              <div style={{
                width: 28, height: 28,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-elevated)',
                border: '1.5px solid var(--accent-gold)',
                borderRadius: 2,
              }}>
                <PixelRocketIcon size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--text-primary)' }}>
                {profile.name}
              </span>
            </a>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 300 }}>
              Developer by Logic, Creator by Passion.
              <br />
              UIN Sultan Syarif Kasim Riau · Riau, ID
            </p>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            {FOOTER_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-github"
                  className="btn btn-ghost btn-sm"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-linkedin"
                  className="btn btn-ghost btn-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              id="btn-back-to-top"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: 12,
                color: 'var(--text-muted)',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 32,
          paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            Built with <Heart size={12} color="#F87171" fill="#F87171" /> using React & TypeScript
          </p>
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 640px) {
          footer .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          footer .container > div:nth-child(2) > div:last-child {
            align-items: center !important;
          }
          footer .container > div:nth-child(2) > div:last-child {
            align-items: center !important;
          }
          footer .container > div:last-child {
            justify-content: center !important;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};
