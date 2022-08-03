import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgClickOutsideDirective } from 'ng-click-outside2';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, NgClickOutsideDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
