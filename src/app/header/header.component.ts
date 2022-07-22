import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewPortScroller.setOffset([0, 50]);
  }

  goToMain(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
  }

  goToProjects(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
  }

  goToAbout(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
  }

  goToContact(element: string) {
    this.viewPortScroller.scrollToAnchor(element);
  }
}
