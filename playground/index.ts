/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxTrimModule } from '../dist/index';


@Component({
  selector: 'app',
  template: `<div>
    <input type="text"  placeholder="input" [(ngModel)]="testInput" ngxTrim>
    <div>{{testInput}}</div>
  </div>`
})
class AppComponent { }

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgxTrimModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
