import { Component, OnInit } from '@angular/core';
import { Work } from '../models/work.models';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public works!: Array<Work>;
  public workIndex: number = 0;
  public playAnimation: boolean = false;
  public workRange: number = 2;

  constructor(private projects: WorksService) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
    console.log(this.works);
  }

  changeRange(change: string): void {
    console.log(this.workRange);
    if (change === 'up' && this.workRange < this.works.length) {
      this.workRange += 2;
    } else if (change === 'down' && this.workRange > 3) {
      this.workRange -= 2;
    } else {
      return;
    }
  }

  selectProject(i: number): void {
    if (i === this.workIndex) {
      return;
    } else {
      this.workIndex = i;
    }
  }
}
