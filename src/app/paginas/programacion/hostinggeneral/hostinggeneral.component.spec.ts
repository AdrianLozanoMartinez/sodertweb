import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostinggeneralComponent } from './hostinggeneral.component';

describe('HostinggeneralComponent', () => {
  let component: HostinggeneralComponent;
  let fixture: ComponentFixture<HostinggeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostinggeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostinggeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
