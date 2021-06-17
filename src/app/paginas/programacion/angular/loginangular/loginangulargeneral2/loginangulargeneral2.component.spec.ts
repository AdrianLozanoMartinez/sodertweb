import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginangulargeneral2Component } from './loginangulargeneral2.component';

describe('Loginangulargeneral2Component', () => {
  let component: Loginangulargeneral2Component;
  let fixture: ComponentFixture<Loginangulargeneral2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginangulargeneral2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginangulargeneral2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
