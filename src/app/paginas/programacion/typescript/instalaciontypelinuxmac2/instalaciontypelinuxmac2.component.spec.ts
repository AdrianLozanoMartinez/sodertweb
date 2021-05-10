import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Instalaciontypelinuxmac2Component } from './instalaciontypelinuxmac2.component';

describe('Instalaciontypelinuxmac2Component', () => {
  let component: Instalaciontypelinuxmac2Component;
  let fixture: ComponentFixture<Instalaciontypelinuxmac2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Instalaciontypelinuxmac2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Instalaciontypelinuxmac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
