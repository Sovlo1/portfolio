import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public dark!: boolean;
  constructor(private darkMode: DarkModeService) {}

  ngOnInit(): void {
    this.dark = this.darkMode.checkDarkMode();
    if (this.dark === true) {
      document.body.classList.toggle('light-mode');
    }
  }
}
