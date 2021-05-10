import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrashtmlComponent } from './letrashtml.component';

describe('LetrashtmlComponent', () => {
  let component: LetrashtmlComponent;
  let fixture: ComponentFixture<LetrashtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrashtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrashtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
