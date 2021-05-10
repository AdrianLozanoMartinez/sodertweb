import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybootComponent } from './displayboot.component';

describe('DisplaybootComponent', () => {
  let component: DisplaybootComponent;
  let fixture: ComponentFixture<DisplaybootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaybootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
