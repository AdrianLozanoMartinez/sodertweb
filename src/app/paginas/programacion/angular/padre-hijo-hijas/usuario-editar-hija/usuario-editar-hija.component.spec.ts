import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarHijaComponent } from './usuario-editar-hija.component';

describe('UsuarioEditarHijaComponent', () => {
  let component: UsuarioEditarHijaComponent;
  let fixture: ComponentFixture<UsuarioEditarHijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEditarHijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditarHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
