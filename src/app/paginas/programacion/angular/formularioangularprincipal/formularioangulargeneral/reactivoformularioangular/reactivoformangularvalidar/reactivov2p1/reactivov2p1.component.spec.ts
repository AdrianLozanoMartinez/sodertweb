import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivov2p1Component } from './reactivov2p1.component';

describe('Reactivov2p1Component', () => {
  let component: Reactivov2p1Component;
  let fixture: ComponentFixture<Reactivov2p1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactivov2p1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactivov2p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
