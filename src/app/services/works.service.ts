import { Injectable } from '@angular/core';
import { Work } from '../models/work.models';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  projects: Array<Work> = [
    {
      name: 'Booki',
      description:
        "Premier projet réalisé dans le cadre de ma formation, le but étant d'initier au HTML et au CSS.",
      image: '../../assets/projects/booki.png',
    },
    {
      name: 'OhMyFood',
      description:
        "Second projet réalisé, le but était d'approfondir les connaissances en HTML et en CSS en y intégrant le concept d'animations, plusieurs pages, l'utilisation du SCSS notamment.",
      image: '../../assets/projects/ohmyfood.png',
    },
    {
      name: 'La Chouette agence',
      description:
        'Troisième projet, le but de ce projet était de "réparer" un site dont les imperfections impactaient fortement son référencement SEO ainsi que son accessibilité. ',
      image: '../../assets/projects/lachouetteagence.png',
    },
    {
      name: 'Kanap',
      description:
        "Premier projet impliquant l'usage de JavaScript, le but était d'initier au langage coté frontend et d'apprendre à modifier le DOM et récupérer des données venant du backend. ",
      image: '../../assets/projects/Kanap.png',
    },
    {
      name: 'Hot takes',
      description:
        "Second projet utilsant JavaScript, celui ci étant l'inverse du précédent et est complètement orienté backend, utilisé pour initier à l'utilisation de NodeJS, express et mongoDB",
      image: '../../assets/projects/hot takes.png',
    },
    {
      name: 'Groupomania',
      description:
        "Dernier projet de la formation, le but était de créer un réseau social pour l'entreprise Groupomania et d'utiliser un framework de notre choix. Le projet étant très libre j'ai fait le choix d'utiliser Angular qui semblait très puissant et agréable d'utilisation, le backend ici est encore une fois créé à l'aide de NodeJS mais la base de donnée quant à elle est cette fois ci en SQL.",
      image: '../../assets/projects/groupomania2.png',
    },
  ];
  constructor() {}
}
