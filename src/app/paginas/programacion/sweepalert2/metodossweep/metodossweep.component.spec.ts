import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodossweepComponent } from './metodossweep.component';

describe('MetodossweepComponent', () => {
  let component: MetodossweepComponent;
  let fixture: ComponentFixture<MetodossweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodossweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodossweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
