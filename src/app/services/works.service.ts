import { Injectable } from '@angular/core';
import { Work } from '../models/work.models';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  projects: Array<Work> = [
    {
      name: 'test',
      description: 'blablablabla',
      bigDescription: 'blabla blabla blabla blabla',
      image: '../../assets/un truc drole quand même.jpg',
    },
    {
      name: 'test',
      description: 'blablablabla',
      bigDescription: 'blablablablablablablabla',
      image: '../../assets/un truc drole quand même.jpg',
    },
    {
      name: 'test',
      description: 'blablablabla',
      bigDescription: 'blablablablablablablabla',
      image: '../../assets/un truc drole quand même.jpg',
    },
    {
      name: 'test',
      description: 'blablablabla',
      bigDescription: 'blablablablablablablabla',
      image: '../../assets/un truc drole quand même.jpg',
    },
  ];
  constructor() {}
}
