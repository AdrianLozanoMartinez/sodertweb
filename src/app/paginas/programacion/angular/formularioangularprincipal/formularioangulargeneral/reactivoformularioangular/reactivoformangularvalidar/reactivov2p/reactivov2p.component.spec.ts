import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivov2pComponent } from './reactivov2p.component';

describe('Reactivov2pComponent', () => {
  let component: Reactivov2pComponent;
  let fixture: ComponentFixture<Reactivov2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactivov2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactivov2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
