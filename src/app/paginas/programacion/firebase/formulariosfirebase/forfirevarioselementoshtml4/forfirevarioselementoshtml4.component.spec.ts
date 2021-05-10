import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfirevarioselementoshtml4Component } from './forfirevarioselementoshtml4.component';

describe('Forfirevarioselementoshtml4Component', () => {
  let component: Forfirevarioselementoshtml4Component;
  let fixture: ComponentFixture<Forfirevarioselementoshtml4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfirevarioselementoshtml4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfirevarioselementoshtml4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
