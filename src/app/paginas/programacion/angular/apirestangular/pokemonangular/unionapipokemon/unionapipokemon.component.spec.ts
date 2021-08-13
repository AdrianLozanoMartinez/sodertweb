import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionapipokemonComponent } from './unionapipokemon.component';

describe('UnionapipokemonComponent', () => {
  let component: UnionapipokemonComponent;
  let fixture: ComponentFixture<UnionapipokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionapipokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionapipokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
