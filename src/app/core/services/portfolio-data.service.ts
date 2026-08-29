import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lang, PortfolioData } from '../interfaces/jsp-content';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private data = signal<PortfolioData | null>(null);
  lang = signal<Lang>('es');

  portfolio = computed(() => this.data());

  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<PortfolioData>('/assets/portfolio-content.json')
      .subscribe(d => {
        this.data.set(d);
        this.lang.set(d.meta.defaultLanguage);
      });
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
  }
}