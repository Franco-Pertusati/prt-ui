export type Lang = 'es' | 'en' | 'ja';

export interface Translatable {
  es: string;
  en: string;
  ja: string;
}

export interface PortfolioLink {
  id: string;
  label: Translatable;
  url: string;
  icon: string;
}

export interface Article {
  id: string;
  title: Translatable;
  description: Translatable;
  date: string;
  url: string;
  tags: string[];
}

export interface PortfolioData {
  meta: {
    name: string;
    defaultLanguage: Lang;
    supportedLanguages: Lang[];
  };
  role: Translatable;
  profileDescription: Translatable;
  links: PortfolioLink[];
  articles: Article[];
}
