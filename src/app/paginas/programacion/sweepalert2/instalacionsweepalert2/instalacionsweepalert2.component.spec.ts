import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Instalacionsweepalert2Component } from './instalacionsweepalert2.component';

describe('Instalacionsweepalert2Component', () => {
  let component: Instalacionsweepalert2Component;
  let fixture: ComponentFixture<Instalacionsweepalert2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Instalacionsweepalert2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Instalacionsweepalert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
