import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark: boolean;

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this._isDark = saved === 'dark';
    } else {
      this._isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  get isDark(): boolean {
    return this._isDark;
  }

  init(): void {
    document.documentElement.setAttribute('data-theme', this._isDark ? 'dark' : 'light');
  }

  toggle(): void {
    this._isDark = !this._isDark;
    const theme = this._isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
