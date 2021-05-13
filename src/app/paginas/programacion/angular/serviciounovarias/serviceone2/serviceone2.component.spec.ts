import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceone2Component } from './serviceone2.component';

describe('Serviceone2Component', () => {
  let component: Serviceone2Component;
  let fixture: ComponentFixture<Serviceone2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serviceone2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serviceone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
