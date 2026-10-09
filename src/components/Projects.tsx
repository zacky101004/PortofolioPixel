// ─── Projects Section ─────────────────────────────────────────────────────────

import React, { useState, useCallback } from 'react';
import { ExternalLink, Search, X, ArrowLeft, ChevronRight, Layers, Code, Sparkles } from 'lucide-react';
import { GithubIcon } from './common/BrandIcons';
import { projects, projectCategories } from '../data/projects';
import {
  PixelQuestArtwork,
  SipelmadArtwork,
  EcommerceDataArtwork,
  SpaceMissionControlArtwork,
  PixelTechIcon,
  PixelRocketIcon,
} from './common/PixelArtGraphics';
import { sfx } from '../utils/soundEffects';
import type { Project } from '../types';

const STATUS_CONFIG = {
  completed:    { label: 'Completed (Kerja Praktik)', color: 'var(--accent-green)', bg: 'var(--accent-green-dim)' },
  'in-progress':{ label: 'In Progress',               color: 'var(--accent-gold)',  bg: 'var(--accent-gold-dim)'  },
  archived:     { label: 'Archived',                  color: 'var(--text-muted)',   bg: 'var(--bg-elevated)'       },
};

// Render custom pixel artwork for each project
const renderProjectArtwork = (id: string) => {
  switch (id) {
    case 'proj-sipelmad':
      return <SipelmadArtwork />;
    case 'proj-pixelquest':
      return <PixelQuestArtwork />;
    case 'proj-ecommerce-analysis':
      return <EcommerceDataArtwork />;
    default:
      return <SpaceMissionControlArtwork />;
  }
};

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onView: (p: Project) => void;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onView, featured }) => {
  const status = STATUS_CONFIG[project.status];
  const accentColor = project.color || 'var(--accent-gold)';

  return (
    <div
      className="card"
      id={`card-project-${project.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        overflow: 'hidden',
        borderTop: `2px solid ${accentColor}80`,
        ...(featured ? { gridColumn: 'span 2' } : {}),
      }}
      onClick={() => {
        sfx.playSelect();
        onView(project);
      }}
      onMouseEnter={() => sfx.playBlip()}
      tabIndex={0}
      role="button"
      onKeyDown={e => {
        if (e.key === 'Enter') {
          sfx.playSelect();
          onView(project);
        }
      }}
      aria-label={`View details for ${project.name}`}
    >
      {/* High-Fidelity Pixel Artwork Thumbnail Container */}
      <div style={{
        height: featured ? 230 : 180,
        background: 'var(--bg-elevated)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Render crisp pixel artwork illustration */}
        <div style={{ width: '100%', height: '100%', transition: 'transform 0.3s ease' }}>
          {renderProjectArtwork(project.id)}
        </div>

        {/* Status badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '3px 8px',
          background: 'rgba(10,16,24,0.85)',
          backdropFilter: 'blur(4px)',
          border: `1px solid ${status.color}70`,
          borderRadius: 2,
          zIndex: 2,
        }}>
          <div style={{ width: 6, height: 6, background: status.color, imageRendering: 'pixelated' }} />
          <span className="pixel-xxs" style={{ color: status.color }}>{status.label.toUpperCase()}</span>
        </div>

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '3px 8px',
          background: 'rgba(10,16,24,0.85)',
          backdropFilter: 'blur(4px)',
          border: '1px solid var(--border)',
          borderRadius: 2,
          zIndex: 2,
        }}>
          <span className="pixel-xxs text-muted">{project.category.toUpperCase()}</span>
        </div>

        {/* Interactive Hover Glint */}
        <div
          className="artwork-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, rgba(16,24,32,0.6) 0%, transparent 60%)`,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
          {project.name}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
          {project.shortDescription}
        </p>

        {/* Tech stack pills with custom pixel icons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {project.technologies.slice(0, 4).map(t => (
            <span
              key={t}
              className="tech-badge"
              style={{
                fontSize: 11,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: 'rgba(32, 46, 58, 0.6)',
                border: '1px solid var(--border)',
              }}
            >
              <PixelTechIcon name={t} size={13} />
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge" style={{ fontSize: 11 }}>+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            className="btn btn-outline btn-sm"
            id={`btn-view-${project.id}`}
            onClick={e => {
              e.stopPropagation();
              sfx.playSelect();
              onView(project);
            }}
            style={{ flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            Inspect Case Study <ChevronRight size={14} />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`btn-github-${project.id}`}
              className="btn btn-ghost btn-sm"
              onClick={e => {
                e.stopPropagation();
                sfx.playSelect();
              }}
              title="View source code"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`btn-demo-${project.id}`}
              className="btn btn-ghost btn-sm"
              onClick={e => {
                e.stopPropagation();
                sfx.playSelect();
              }}
              title="Live demo link"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Project Detail Modal with Interactive Tabs ──────────────────────────────

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'mockup'>('overview');

  if (!project) return null;

  const status = STATUS_CONFIG[project.status];
  const accentColor = project.color || 'var(--accent-gold)';

  return (
    <div
      className="modal-overlay"
      id="modal-project-overlay"
      onClick={e => {
        if (e.target === e.currentTarget) {
          sfx.playModalClose();
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content" style={{ maxWidth: 800 }}>
        {/* Modal Top Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-section)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                sfx.playModalClose();
                onClose();
              }}
              id="btn-close-modal-back"
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <ArrowLeft size={16} /> Back to Projects
            </button>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span className="pixel-xxs" style={{ color: accentColor }}>{project.category.toUpperCase()}</span>
          </div>

          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              sfx.playModalClose();
              onClose();
            }}
            id="btn-close-modal-x"
            style={{ padding: '6px' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Banner */}
        <div style={{
          height: 260,
          background: 'var(--bg-elevated)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          {renderProjectArtwork(project.id)}
        </div>

        {/* Interactive Tabs Header */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-base)',
          padding: '0 24px',
          gap: 8,
        }}>
          {[
            { id: 'overview', label: 'Case Study', icon: Sparkles },
            { id: 'architecture', label: 'Architecture & Tech', icon: Layers },
            { id: 'mockup', label: 'Live Preview Mockup', icon: Code },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sfx.playSelect();
                  setActiveTab(tab.id as typeof activeTab);
                }}
                style={{
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  borderBottom: isActive ? '2px solid var(--accent-gold)' : '2px solid transparent',
                  background: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          {activeTab === 'overview' && (
            <div>
              {/* Title + status */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                <div>
                  <h2 id="modal-project-title" style={{ fontSize: 26, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6 }}>
                    {project.name}
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.shortDescription}
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '5px 12px',
                  background: status.bg,
                  border: `1px solid ${status.color}50`,
                  borderRadius: 2, flexShrink: 0,
                }}>
                  <div style={{ width: 7, height: 7, background: status.color, imageRendering: 'pixelated' }} />
                  <span className="pixel-xxs" style={{ color: status.color }}>{status.label.toUpperCase()}</span>
                </div>
              </div>

              {/* Role badge */}
              <div style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 2 }}>
                <span className="pixel-xxs text-muted">ROLE:</span>
                <span style={{ fontSize: 13, color: accentColor, fontWeight: 600 }}>{project.role}</span>
              </div>

              {/* Problem / Goal / Solution Breakdown */}
              {[
                { label: '🔍 The Challenge & Problem', text: project.problem, color: '#FF7B72' },
                { label: '🎯 Project Goal', text: project.goal, color: 'var(--accent-blue)' },
                { label: '💡 Engineering Solution', text: project.solution, color: 'var(--accent-green)' },
              ].map(s => (
                <div key={s.label} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.color, marginBottom: 6 }}>{s.label}</div>
                  <p style={{
                    fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7,
                    padding: '12px 16px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: `3px solid ${s.color}`,
                  }}>
                    {s.text}
                  </p>
                </div>
              ))}

              {/* Features List */}
              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                  ✨ Key Features & Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
                  {project.features.map(f => (
                    <div
                      key={f}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        fontSize: 13,
                        color: 'var(--text-secondary)',
                        padding: '10px 14px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 2,
                      }}
                    >
                      <span style={{ color: accentColor, flexShrink: 0, marginTop: 1 }}>▸</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>
                System Architecture & Technology Choices
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                Every technology was chosen purposefully to guarantee optimal load times, modular maintainability, and tactile responsiveness.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 24 }}>
                {project.technologies.map(t => (
                  <div
                    key={t}
                    style={{
                      padding: 16,
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <PixelTechIcon name={t} size={28} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{t}</div>
                      <div className="pixel-xxs text-muted">PRODUCTION STACK</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: 16,
                background: 'rgba(118, 183, 229, 0.08)',
                border: '1px solid var(--accent-blue)',
                borderRadius: 4,
                fontSize: 13,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                <strong style={{ color: 'var(--accent-blue)' }}>Architecture Note:</strong> Clean component encapsulation, strict TypeScript types, decoupled state management, and optimized asset delivery ensures seamless performance across all screen sizes.
              </div>
            </div>
          )}

          {activeTab === 'mockup' && (
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 14 }}>
                Interactive UI Simulation &amp; Real App Preview
              </h3>
              <div style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                overflow: 'hidden',
                marginBottom: 20,
              }}>
                {/* Browser top chrome */}
                <div style={{
                  padding: '8px 14px',
                  background: 'var(--bg-surface)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F56' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27C93F' }} />
                  </div>
                  <div style={{
                    flex: 1,
                    maxWidth: 360,
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: 3,
                    padding: '3px 10px',
                    fontSize: 11,
                    color: 'var(--text-secondary)',
                    fontFamily: 'monospace',
                  }}>
                    https://{project.slug}.dev/live
                  </div>
                </div>

                <div style={{ padding: 20, textAlign: 'center', background: 'var(--bg-section)' }}>
                  <div style={{ maxWidth: 480, margin: '0 auto' }}>
                    {renderProjectArtwork(project.id)}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    <ExternalLink size={14} /> Open Live Web App
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    <GithubIcon size={14} /> View GitHub Repo
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Bottom Links */}
          <div style={{ display: 'flex', gap: 12, paddingTop: 20, borderTop: '1px solid var(--border)', marginTop: 24, flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id={`btn-detail-github-${project.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <GithubIcon size={16} /> View Source Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id={`btn-detail-demo-${project.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <ExternalLink size={16} /> Launch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Projects Section ───────────────────────────────────────────────────

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCategoryChange = (cat: string) => {
    sfx.playSelect();
    setActiveCategory(cat);
  };

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProject = filteredProjects.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => p !== featuredProject);

  const handleView = useCallback((p: Project) => {
    sfx.playModalOpen();
    setSelectedProject(p);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <div className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <PixelRocketIcon size={16} />
            <span>COSMIC_EXPEDITIONS // FEATURED PROJECTS</span>
          </div>
          <h2 className="section-title">Proyek Unggulan</h2>
          <p className="section-subtitle">
            Showcase proyek pengembangan web, arsitektur backend REST API, dan eksplorasi data science yang telah dan sedang dikembangkan.
          </p>
        </div>

        {/* Filter bar & live search */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          marginBottom: 36,
          flexWrap: 'wrap',
        }}>
          {/* Category buttons */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {projectCategories.map(cat => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`btn-project-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`btn btn-sm ${active ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => handleCategoryChange(cat)}
                  style={{ fontSize: 12 }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', minWidth: 260 }}>
            <Search
              size={15}
              style={{
                position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                color: 'var(--text-muted)', pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={e => {
                sfx.playKeypress();
                setSearchQuery(e.target.value);
              }}
              id="input-search-projects"
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: 13,
                outline: 'none',
                fontFamily: 'var(--font-body)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  sfx.playSelect();
                  setSearchQuery('');
                }}
                style={{
                  position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--text-muted)', padding: 2,
                }}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '64px 24px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
              No matching projects found
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
              No projects match "{searchQuery}" in this category.
            </p>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => {
                sfx.playSelect();
                setSearchQuery('');
                setActiveCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {featuredProject && (
              <ProjectCard project={featuredProject} onView={handleView} featured={true} />
            )}
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} onView={handleView} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
