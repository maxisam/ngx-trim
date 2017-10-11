import { NgxTrimDirective } from './ngx-trim.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export * from './ngx-trim.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NgxTrimDirective
  ],
  exports: [
    NgxTrimDirective
  ]
})
export class NgxTrimModule {
}
