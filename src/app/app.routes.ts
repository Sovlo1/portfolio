import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'slideAnimation1' },
  },
  {
    path: 'projects',
    component: PortfolioComponent,
    data: { animation: 'slideAnimation2' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'slideAnimation3' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'slideAnimation4' },
  },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];
