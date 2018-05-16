import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxTrimModule } from '../../projects/ngx-trim/src/lib/ngx-trim.module';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxTrimModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
