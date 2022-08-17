import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Tech } from '../models/tech.models';
import { Work } from '../models/work.models';
import { DarkModeService } from '../services/dark-mode.service';
import { TechsService } from '../services/techs.service';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public hovered: boolean = false;
  public works!: Array<Work>;
  public techs!: Array<Tech>;
  public index?: number;
  public isMenuOpen: boolean = false;
  public dirtyMenu: boolean = false;
  public dark!: boolean;
  public animation: boolean = false;

  constructor(
    private projects: WorksService,
    private technologies: TechsService,
    private viewPortScroller: ViewportScroller,
    private darkMode: DarkModeService
  ) {}

  @HostListener('window:scroll') onScroll() {
    console.log(this.viewPortScroller.getScrollPosition());
  }

  ngOnInit(): void {
    this.works = this.projects.projects;
    this.techs = this.technologies.technologies;
    this.viewPortScroller.setOffset([0, 50]);
    console.log(this.viewPortScroller.getScrollPosition());
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

  test(): void {
    this.dark = this.darkMode.changeMode();
    document.body.classList.toggle('light-mode');
  }
}
