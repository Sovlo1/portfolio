import { Injectable } from '@angular/core';
import { Diploma } from '../models/diploma.models';

@Injectable({
  providedIn: 'root',
})
export class DiplomasService {
  diplomas: Array<Diploma> = [
    {
      name: 'Brevet des collèges',
      year: 2007,
      school: 'Collège Amiral de Rigny',
      location: 'Toul, 54200',
    },
    {
      name: 'BEP Electronique',
      year: 2009,
      school: 'Lycée Jean Prouvé',
      location: 'Nancy, 54000',
    },
    {
      name: 'Diplôme RNCP de niveau 5 en développement web',
      year: 2022,
      school: 'OpenClassrooms',
      location: 'Formation à distance',
    },
  ];
  constructor() {}
}
