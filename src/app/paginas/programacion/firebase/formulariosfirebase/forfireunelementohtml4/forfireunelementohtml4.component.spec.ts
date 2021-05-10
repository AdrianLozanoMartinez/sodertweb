import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfireunelementohtml4Component } from './forfireunelementohtml4.component';

describe('Forfireunelementohtml4Component', () => {
  let component: Forfireunelementohtml4Component;
  let fixture: ComponentFixture<Forfireunelementohtml4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfireunelementohtml4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfireunelementohtml4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
