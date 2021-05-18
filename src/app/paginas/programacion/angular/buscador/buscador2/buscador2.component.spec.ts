import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buscador2Component } from './buscador2.component';

describe('Buscador2Component', () => {
  let component: Buscador2Component;
  let fixture: ComponentFixture<Buscador2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buscador2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buscador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
