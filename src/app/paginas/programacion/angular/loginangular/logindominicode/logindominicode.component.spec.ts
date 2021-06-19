import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindominicodeComponent } from './logindominicode.component';

describe('LogindominicodeComponent', () => {
  let component: LogindominicodeComponent;
  let fixture: ComponentFixture<LogindominicodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindominicodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindominicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
