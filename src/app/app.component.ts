import { Component } from '@angular/core';
import { ChildrenOutletContexts, OutletContext } from '@angular/router';
import { slideInAnimation } from './animations/slide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData(outlet: any) {
    return outlet.activatedRouteData.animation;
  }
}
