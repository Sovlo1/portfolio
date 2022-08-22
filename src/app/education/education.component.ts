import { Component, OnInit } from '@angular/core';
import { Diploma } from '../models/diploma.models';
import { Tech } from '../models/tech.models';
import { DiplomasService } from '../services/diplomas.service';
import { TechsService } from '../services/techs.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public diplomas!: Array<Diploma>;
  public techs!: Array<Tech>;

  constructor(
    private diplomas$: DiplomasService,
    private technologies: TechsService
  ) {}

  ngOnInit(): void {
    this.diplomas = this.diplomas$.diplomas;
    this.techs = this.technologies.technologies;
  }
}
