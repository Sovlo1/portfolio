import { Component } from '@angular/core';
import { ChildrenOutletContexts, OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData(outlet: any) {
    return outlet.activatedRouteData.animation;
  }
}
