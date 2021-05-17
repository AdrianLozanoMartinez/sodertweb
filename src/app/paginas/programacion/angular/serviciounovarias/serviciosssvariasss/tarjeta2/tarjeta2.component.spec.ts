import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta2Component } from './tarjeta2.component';

describe('Tarjeta2Component', () => {
  let component: Tarjeta2Component;
  let fixture: ComponentFixture<Tarjeta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarjeta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjeta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
