import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  checkDarkMode(): boolean {
    if (window.localStorage.getItem('light-mode')) {
      return JSON.parse(window.localStorage.getItem('light-mode')!);
    } else {
      window.localStorage.setItem('light-mode', JSON.stringify(true));
      return JSON.parse(window.localStorage.getItem('light-mode')!);
    }
  }

  changeMode() {
    let darkMode = JSON.parse(window.localStorage.getItem('light-mode')!);
    darkMode = !darkMode;
    window.localStorage.setItem('light-mode', JSON.stringify(darkMode));
  }

  constructor() {}
}
