import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfireunelementohtml2Component } from './forfireunelementohtml2.component';

describe('Forfireunelementohtml2Component', () => {
  let component: Forfireunelementohtml2Component;
  let fixture: ComponentFixture<Forfireunelementohtml2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfireunelementohtml2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfireunelementohtml2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
