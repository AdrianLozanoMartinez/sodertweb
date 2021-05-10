import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweepalert2Component } from './sweepalert2.component';

describe('Sweepalert2Component', () => {
  let component: Sweepalert2Component;
  let fixture: ComponentFixture<Sweepalert2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sweepalert2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sweepalert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
