import { Component, OnInit } from '@angular/core';
import { Diploma } from '../models/diploma.models';
import { Tech } from '../models/tech.models';
import { Work } from '../models/work.models';
import { DiplomasService } from '../services/diplomas.service';
import { TechsService } from '../services/techs.service';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public works!: Array<Work>;
  public diplomas!: Array<Diploma>;
  public techs!: Array<Tech>;

  constructor(
    private diplomas$: DiplomasService,
    private technologies: TechsService,
    private projects: WorksService
  ) {}

  ngOnInit(): void {
    this.diplomas = this.diplomas$.diplomas;
    this.techs = this.technologies.technologies;
    this.works = this.projects.projects;
  }
}
