import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalarsweepComponent } from './instalarsweep.component';

describe('InstalarsweepComponent', () => {
  let component: InstalarsweepComponent;
  let fixture: ComponentFixture<InstalarsweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalarsweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalarsweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
