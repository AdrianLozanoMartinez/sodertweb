import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfirevarioselementoshtml2Component } from './forfirevarioselementoshtml2.component';

describe('Forfirevarioselementoshtml2Component', () => {
  let component: Forfirevarioselementoshtml2Component;
  let fixture: ComponentFixture<Forfirevarioselementoshtml2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfirevarioselementoshtml2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfirevarioselementoshtml2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
