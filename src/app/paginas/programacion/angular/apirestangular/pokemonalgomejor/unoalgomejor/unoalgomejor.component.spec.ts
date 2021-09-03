import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoalgomejorComponent } from './unoalgomejor.component';

describe('UnoalgomejorComponent', () => {
  let component: UnoalgomejorComponent;
  let fixture: ComponentFixture<UnoalgomejorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnoalgomejorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnoalgomejorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
