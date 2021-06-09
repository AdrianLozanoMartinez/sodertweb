import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalleHijaComponent } from './usuario-detalle-hija.component';

describe('UsuarioDetalleHijaComponent', () => {
  let component: UsuarioDetalleHijaComponent;
  let fixture: ComponentFixture<UsuarioDetalleHijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalleHijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalleHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
