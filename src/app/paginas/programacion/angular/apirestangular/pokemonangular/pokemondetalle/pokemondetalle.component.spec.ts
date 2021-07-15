import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondetalleComponent } from './pokemondetalle.component';

describe('PokemondetalleComponent', () => {
  let component: PokemondetalleComponent;
  let fixture: ComponentFixture<PokemondetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemondetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
