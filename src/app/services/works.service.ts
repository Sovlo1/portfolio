import { Injectable } from '@angular/core';
import { Work } from '../models/work.models';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  projects: Array<Work> = [
    {
      name: 'OhMyFood',
      description: 'OhMyFood',
      image: '../../assets/projects/ohmyfood.png',
    },
    {
      name: 'Booki',
      description: 'blablablabla',

      image: '../../assets/projects/booki.png',
    },
    {
      name: 'La Chouette agence',
      description: 'blablablabla',
      image: '../../assets/projects/lachouetteagence.png',
    },
    {
      name: 'test',
      description: 'blablablabla',

      image: '../../assets/un truc drole quand même.jpg',
    },
    {
      name: 'test',
      description: 'blablablabla',

      image: '../../assets/un truc drole quand même.jpg',
    },
    {
      name: 'test',
      description: 'blablablabla',

      image: '../../assets/un truc drole quand même.jpg',
    },
  ];
  constructor() {}
}
