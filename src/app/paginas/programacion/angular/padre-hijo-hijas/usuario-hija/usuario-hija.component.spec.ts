import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHijaComponent } from './usuario-hija.component';

describe('UsuarioHijaComponent', () => {
  let component: UsuarioHijaComponent;
  let fixture: ComponentFixture<UsuarioHijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
