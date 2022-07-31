import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  projects: any = [
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
