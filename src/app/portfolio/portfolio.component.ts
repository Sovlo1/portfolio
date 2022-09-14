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

  constructor(private projects: WorksService) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
    console.log(this.works);
  }

  selectProject(i: number): void {
    if (i === this.workIndex) {
      return;
    } else this.workIndex = i;
    console.log(i);
  }
}
