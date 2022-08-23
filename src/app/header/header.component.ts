import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public dirtyMenu: boolean = false;
  public dark!: boolean;
  public animation: boolean = false;
  constructor(private darkMode: DarkModeService, private router: Router) {}

  ngOnInit(): void {
    this.dark = this.darkMode.checkDarkMode();
    if (this.dark === true) {
      document.body.classList.toggle('light-mode');
    }
  }

  DarkOrLightMode(): void {
    this.dark = this.darkMode.changeMode();
    document.body.classList.toggle('light-mode');
  }

  goTo(element: string): void {
    this.router.navigate(['./' + element]);
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.animation = !this.animation;
    this.dirtyMenu = true;
  }

  closeMenu(): void {
    if (this.isMenuOpen === true) {
      this.animation = !this.animation;
      this.isMenuOpen = false;
    }
  }
}
