import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivovasinComponent } from './reactivovasin.component';

describe('ReactivovasinComponent', () => {
  let component: ReactivovasinComponent;
  let fixture: ComponentFixture<ReactivovasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivovasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivovasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
