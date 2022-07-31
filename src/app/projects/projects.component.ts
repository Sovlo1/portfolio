import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public hovered: boolean = false;
  public works!: any;
  public index?: number;

  constructor(private projects: WorksService) {}

  ngOnInit(): void {
    this.works = this.projects.projects;
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
}
