import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonmejorpaginacionComponent } from './pokemonmejorpaginacion.component';

describe('PokemonmejorpaginacionComponent', () => {
  let component: PokemonmejorpaginacionComponent;
  let fixture: ComponentFixture<PokemonmejorpaginacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonmejorpaginacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonmejorpaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
