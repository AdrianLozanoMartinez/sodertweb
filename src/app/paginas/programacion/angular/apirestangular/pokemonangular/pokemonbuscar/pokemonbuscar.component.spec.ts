import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonbuscarComponent } from './pokemonbuscar.component';

describe('PokemonbuscarComponent', () => {
  let component: PokemonbuscarComponent;
  let fixture: ComponentFixture<PokemonbuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonbuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonbuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
