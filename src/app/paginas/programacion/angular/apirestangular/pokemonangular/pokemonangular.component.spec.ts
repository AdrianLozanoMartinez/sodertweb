import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonangularComponent } from './pokemonangular.component';

describe('PokemonangularComponent', () => {
  let component: PokemonangularComponent;
  let fixture: ComponentFixture<PokemonangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
