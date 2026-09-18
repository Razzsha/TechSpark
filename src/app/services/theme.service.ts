import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeMode>('light');
  currentTheme$ = this.themeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('techspark_theme') as ThemeMode;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  toggleTheme(): void {
    const next = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  setTheme(theme: ThemeMode): void {
    this.themeSubject.next(theme);
    localStorage.setItem('techspark_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  get isDark(): boolean {
    return this.themeSubject.value === 'dark';
  }
}
