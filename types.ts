
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  duration: string;
  details: string;
  coursework?: string[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  duration: string;
  summary?: string;
  details: string[];
  engagementType?: string;
}

export interface LanguageItem {
  name: string;
  level: 'Native' | 'Fluent' | 'Conversational' | 'Basic';
}