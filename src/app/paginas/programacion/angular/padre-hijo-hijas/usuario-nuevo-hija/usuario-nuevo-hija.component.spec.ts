import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNuevoHijaComponent } from './usuario-nuevo-hija.component';

describe('UsuarioNuevoHijaComponent', () => {
  let component: UsuarioNuevoHijaComponent;
  let fixture: ComponentFixture<UsuarioNuevoHijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNuevoHijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNuevoHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
