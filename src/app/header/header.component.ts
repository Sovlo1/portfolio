import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  constructor(
    private darkMode: DarkModeService,
    private viewPortScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.dark = this.darkMode.checkDarkMode();
    if (this.dark === true) {
      document.body.classList.toggle('light-mode');
    }
  }

  test(): void {
    this.dark = this.darkMode.changeMode();
    document.body.classList.toggle('light-mode');
  }

  goTo(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
    console.log(this.viewPortScroller.getScrollPosition());
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
