export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string[];
  abstract: string;
  link?: string;
  tags: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: 'Brain' | 'BarChart' | 'Users' | 'Globe';
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isStreaming?: boolean;
}