import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivosangularComponent } from './reactivosangular.component';

describe('ReactivosangularComponent', () => {
  let component: ReactivosangularComponent;
  let fixture: ComponentFixture<ReactivosangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivosangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivosangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
