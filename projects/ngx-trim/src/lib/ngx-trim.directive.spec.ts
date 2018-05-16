import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTrimDirective } from './ngx-trim.directive';

describe('NgxTrimDirective', () => {
  let component: NgxTrimDirective;
  let fixture: ComponentFixture<NgxTrimDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTrimDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTrimDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
