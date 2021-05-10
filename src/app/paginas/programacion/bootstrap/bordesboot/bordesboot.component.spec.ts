import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordesbootComponent } from './bordesboot.component';

describe('BordesbootComponent', () => {
  let component: BordesbootComponent;
  let fixture: ComponentFixture<BordesbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordesbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordesbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
