import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonformamejoradaComponent } from './pokemonformamejorada.component';

describe('PokemonformamejoradaComponent', () => {
  let component: PokemonformamejoradaComponent;
  let fixture: ComponentFixture<PokemonformamejoradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonformamejoradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonformamejoradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
