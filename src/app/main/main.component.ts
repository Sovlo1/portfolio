import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Work } from '../models/work.models';
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

  constructor(
    private projects: WorksService,
    private viewPortScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
    this.viewPortScroller.setOffset([0, 50]);
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
    console.log(this.isMenuOpen);
  }

  closeMenu(): void {
    if (this.isMenuOpen === true) {
      this.isMenuOpen = false;
      console.log(this.isMenuOpen);
    }
  }
}
