import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgClickOutsideDirective,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
