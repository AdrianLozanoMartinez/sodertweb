import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalesComponent } from './terminales.component';

describe('TerminalesComponent', () => {
  let component: TerminalesComponent;
  let fixture: ComponentFixture<TerminalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
