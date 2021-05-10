import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfirevarioselementoshtml3Component } from './forfirevarioselementoshtml3.component';

describe('Forfirevarioselementoshtml3Component', () => {
  let component: Forfirevarioselementoshtml3Component;
  let fixture: ComponentFixture<Forfirevarioselementoshtml3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfirevarioselementoshtml3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfirevarioselementoshtml3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
