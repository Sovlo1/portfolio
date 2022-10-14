import { Injectable } from '@angular/core';
import { Work } from '../models/work.models';
import { TechsService } from './techs.service';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  constructor(private technologies: TechsService) {}

  public tech = this.technologies.technologies;

  projects: Array<Work> = [
    {
      name: 'Booki',
      description:
        "Premier projet réalisé dans le cadre de ma formation, le but étant d'initier au HTML et au CSS.",
      image: '../../assets/projects/bookilogo.png',
      stack: [this.tech[0], this.tech[1]],
      link: 'https://booki.raph.cool/',
      github: ['https://github.com/Sovlo1/booki'],
    },
    {
      name: 'OhMyFood',
      description:
        "Second projet réalisé, le but était d'approfondir les connaissances en HTML et en CSS en y intégrant le concept d'animations, plusieurs pages, l'utilisation du SCSS notamment.",
      image: '../../assets/projects/ohmyfoodlogo.png',
      stack: [this.tech[0], this.tech[1], this.tech[2]],
      link: 'https://ohmyfood.raph.cool/',
      github: ['https://github.com/Sovlo1/RaphaelAlves_3_23112021'],
    },
    {
      name: 'La Chouette agence',
      description:
        'Troisième projet, le but de ce projet était de "réparer" un site dont les imperfections impactaient fortement son référencement SEO ainsi que son accessibilité. ',
      image: '../../assets/projects/lachouetteagencelogo.png',
      stack: [this.tech[0]],
      github: ['https://github.com/Sovlo1/La-chouette-agence'],
    },
    {
      name: 'Kanap',
      description:
        "Premier projet impliquant l'usage de JavaScript, le but était d'initier au langage coté frontend et d'apprendre à modifier le DOM et récupérer des données venant du backend. ",
      image: '../../assets/projects/kanaplogo.png',
      stack: [this.tech[3]],
      github: ['https://github.com/Sovlo1/P5-Dev-Web-Kanap'],
    },
    {
      name: 'Hot takes',
      description:
        "Second projet utilsant JavaScript, celui ci étant l'inverse du précédent et est complètement orienté backend, utilisé pour initier à l'utilisation de NodeJS, express et mongoDB",
      image: '../../assets/projects/hottakeslogo.png',
      stack: [this.tech[6], this.tech[7]],
      github: ['https://github.com/Sovlo1/Projet6OC_08-04-22'],
    },
    {
      name: 'Groupomania',
      description:
        "Dernier projet de la formation, le but était de créer un réseau social pour l'entreprise Groupomania et d'utiliser un framework de notre choix. Le projet étant très libre j'ai fait le choix d'utiliser Angular qui semblait très puissant et agréable d'utilisation, le backend ici est encore une fois créé à l'aide de NodeJS mais la base de donnée quant à elle est cette fois ci en SQL.",
      image: '../../assets/projects/groupomanialogo.png',
      stack: [this.tech[5], this.tech[6], this.tech[8]],
      github: ['https://github.com/Sovlo1/groupomania'],
    },
    {
      name: 'Portfolio',
      description: "C'est le site ou vous vous trouvez actuellement!",
      image: '../../assets/projects/cool-emoji.svg',
      stack: [this.tech[5]],
      github: ['https://github.com/Sovlo1/portfolio'],
    },
    {
      name: 'dotaBot',
      description:
        "Petit projet de bot destiné à Discord. Le projet a été fait sous node.js avec l'aide de discord.js pour la structure et de mongoDB pour une petite base de données",
      image: '../../assets/projects/robot-emoji.svg',
      stack: [this.tech[6]],
      github: ['https://github.com/Sovlo1/discordbot'],
    },
  ];
}
