import { Injectable } from '@angular/core';
import { Tech } from '../models/tech.models';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  technologies: Array<Tech> = [
    {
      name: 'truc',
      image: 'machin',
    },
    {
      name: 'truc',
      image: 'machin',
    },
  ];
  constructor() {}
}
