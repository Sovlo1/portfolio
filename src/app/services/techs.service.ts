import { Injectable } from '@angular/core';
import { Tech } from '../models/tech.models';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  technologies: Array<Tech> = [
    {
      name: 'HTML5',
      image: '../../assets/technos/html-1.svg',
    },
    {
      name: 'CSS3',
      image: '../../assets/technos/css-3.svg',
    },

    {
      name: 'JavaScript',
      image: '../../assets/technos/logo-javascript.svg',
    },
    {
      name: 'Typescript',
      image: '../../assets/technos/typescript.svg',
    },
    {
      name: 'Angular',
      image: '../../assets/technos/angular.svg',
    },
    {
      name: 'NodeJS',
      image: '../../assets/technos/nodejs-1.svg',
    },
  ];
  constructor() {}
}
