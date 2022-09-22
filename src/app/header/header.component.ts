import { Component, HostListener, OnInit } from '@angular/core';
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
  public currentWindowWidth!: number;
  public displayButtons: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
  }

  goTo(element: string): void {
    this.router.navigate(['./' + element]);
  }

  showButtons() {
    this.displayButtons = !this.displayButtons;
  }
}
