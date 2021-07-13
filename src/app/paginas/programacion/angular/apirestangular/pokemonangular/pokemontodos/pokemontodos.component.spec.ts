import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontodosComponent } from './pokemontodos.component';

describe('PokemontodosComponent', () => {
  let component: PokemontodosComponent;
  let fixture: ComponentFixture<PokemontodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemontodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemontodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
