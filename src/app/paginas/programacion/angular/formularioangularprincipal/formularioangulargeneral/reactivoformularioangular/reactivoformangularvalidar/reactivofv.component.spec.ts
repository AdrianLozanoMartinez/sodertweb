import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoformangularvalidarComponent } from './reactivofv.component';

describe('ReactivoformangularvalidarComponent', () => {
  let component: ReactivoformangularvalidarComponent;
  let fixture: ComponentFixture<ReactivoformangularvalidarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivoformangularvalidarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoformangularvalidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
