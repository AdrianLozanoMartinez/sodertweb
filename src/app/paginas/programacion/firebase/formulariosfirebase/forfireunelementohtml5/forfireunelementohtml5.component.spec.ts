import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfireunelementohtml5Component } from './forfireunelementohtml5.component';

describe('Forfireunelementohtml5Component', () => {
  let component: Forfireunelementohtml5Component;
  let fixture: ComponentFixture<Forfireunelementohtml5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forfireunelementohtml5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfireunelementohtml5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
