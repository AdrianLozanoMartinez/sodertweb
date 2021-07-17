import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivoformangularvalidar1Component } from './reactivofv1.component';

describe('Reactivoformangularvalidar1Component', () => {
  let component: Reactivoformangularvalidar1Component;
  let fixture: ComponentFixture<Reactivoformangularvalidar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactivoformangularvalidar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactivoformangularvalidar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
