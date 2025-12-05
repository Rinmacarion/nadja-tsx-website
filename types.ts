export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string[];
  abstract: string;
  link?: string;
  pdf?: string;
  tags: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: 'Brain' | 'BarChart' | 'Users' | 'Globe';
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  rating: number;
  comments: { author: string; text: string; date: string }[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isStreaming?: boolean;
}
