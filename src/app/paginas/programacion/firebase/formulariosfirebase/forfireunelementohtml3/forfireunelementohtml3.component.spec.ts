import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfireunelementohtml3Component } from './forfireunelementohtml3.component';

describe('Forfireunelementohtml3Component', () => {
  let component: Forfireunelementohtml3Component;
  let fixture: ComponentFixture<Forfireunelementohtml3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfireunelementohtml3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfireunelementohtml3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
