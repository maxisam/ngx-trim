/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxTrimModule } from 'ngx-trim';


@Component({
  selector: 'my-app',
  styles:[`
      :host{
      display: flex;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      align-items: center;
      justify-content: space-around;
    }
  `],
  template: `<div>
  <label>Trim after focus out</label>
	<input type="text" class="form-control" placeholder="Type something" [(ngModel)]="testInput" ngxTrim>
  <div>{{testInput}}</div>
  <br/>
  <label>Trim after key up</label>
	<input type="text" class="form-control" placeholder="Type something" [(ngModel)]="testInput2" ngxTrim='keyup'>
	<div>{{testInput2}}</div>
</div>`
})
class AppComponent { }

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxTrimModule ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
