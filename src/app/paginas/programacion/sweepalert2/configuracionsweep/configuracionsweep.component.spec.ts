import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionsweepComponent } from './configuracionsweep.component';

describe('ConfiguracionsweepComponent', () => {
  let component: ConfiguracionsweepComponent;
  let fixture: ComponentFixture<ConfiguracionsweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionsweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionsweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
