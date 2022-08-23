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

  constructor(private projects: WorksService) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
  }
}
