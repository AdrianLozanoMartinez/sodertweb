import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivoformangular1Component } from './reactivof1.component';

describe('Reactivoformangular1Component', () => {
  let component: Reactivoformangular1Component;
  let fixture: ComponentFixture<Reactivoformangular1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactivoformangular1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactivoformangular1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
