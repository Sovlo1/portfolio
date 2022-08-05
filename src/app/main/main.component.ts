import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Work } from '../models/work.models';
import { DarkModeService } from '../services/dark-mode.service';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public hovered: boolean = false;
  public works!: Array<Work>;
  public index?: number;
  public isMenuOpen: boolean = false;
  public dark!: boolean;
  public animation: boolean = false;
  public animationOff: boolean = false;

  constructor(
    private projects: WorksService,
    private viewPortScroller: ViewportScroller,
    private darkMode: DarkModeService
  ) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
    this.viewPortScroller.setOffset([0, 50]);
    this.dark = this.darkMode.checkDarkMode();
    if (this.dark === true) {
      document.body.classList.toggle('light-mode');
    }
  }

  isHovered(i: number): void {
    this.index = i;
    this.hovered = true;
  }

  isNotHovered(): void {
    this.hovered = false;
  }

  showIndex(i: number) {
    console.log(i);
  }

  goTo(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.animation = !this.animation;
  }

  closeMenu(): void {
    if (this.isMenuOpen === true) {
      this.animation = false;
      this.animationOff = true;
      setTimeout(() => {
        this.isMenuOpen = false;
      }, 500);
    }
    this.animationOff = false;
  }

  test(): void {
    this.dark = this.darkMode.changeMode();
    document.body.classList.toggle('light-mode');
  }
}
