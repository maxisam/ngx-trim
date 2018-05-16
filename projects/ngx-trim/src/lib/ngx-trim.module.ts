import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxTrimDirective } from './ngx-trim.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgxTrimDirective],
  exports: [NgxTrimDirective]
})
export class NgxTrimModule {}
