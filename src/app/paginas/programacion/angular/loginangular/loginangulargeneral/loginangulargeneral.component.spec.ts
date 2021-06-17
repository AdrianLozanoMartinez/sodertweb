import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginangulargeneralComponent } from './loginangulargeneral.component';

describe('LoginangulargeneralComponent', () => {
  let component: LoginangulargeneralComponent;
  let fixture: ComponentFixture<LoginangulargeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginangulargeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginangulargeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
