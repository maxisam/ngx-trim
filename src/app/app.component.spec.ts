import { TestBed, async, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxTrimModule } from '../../projects/ngx-trim/src/lib/ngx-trim.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CommonModule, FormsModule, NgxTrimModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should trim text after focusout', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const input = fixture.debugElement.nativeElement.querySelector(
      'input.test1'
    );
    input.value = 'someValue  ';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('focusout'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.componentInstance.testInput).toBe('someValue');
    });
  }));

  it('should trim text after keyup', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const input = fixture.debugElement.nativeElement.querySelector(
      'input.test2'
    );
    input.value = 'someValue  ';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('keyup'));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.componentInstance.testInput2).toBe('someValue');
    });
  }));
});
