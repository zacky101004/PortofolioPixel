// ─── Portfolio Types ───────────────────────────────────────────────────────

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';
export type SkillCategory =
  | 'Backend Development'
  | 'Frontend Development'
  | 'Database Management'
  | 'UI/UX Design'
  | 'Data Mining & Machine Learning'
  | 'Creative Design & Digital Content'
  | 'Tools & Workflow';

// ─── Profile ──────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  taglineAlt?: string;
  bio: string;
  fullBio: string[];
  location: string;
  university: string;
  major: string;
  classGrade: string;
  education: Education[];
  primaryField: string;
  focusAreas: string[];
  supportingFields: string[];
  interests: string[];
  focus: string[];
  softSkills: string[];
  careerMission: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarPath: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}

// ─── Skills ───────────────────────────────────────────────────────────────

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  statusBadge?: string;
  icon?: string;
}

// ─── Projects ─────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  problem: string;
  goal: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
  image?: string;
  mockupImage?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  status: ProjectStatus;
  featured?: boolean;
  color?: string; // accent color for the card
}

// ─── Experience ───────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  outcomes: string[];
  technologies?: string[];
  type: 'internship' | 'organization' | 'academic' | 'other';
}
