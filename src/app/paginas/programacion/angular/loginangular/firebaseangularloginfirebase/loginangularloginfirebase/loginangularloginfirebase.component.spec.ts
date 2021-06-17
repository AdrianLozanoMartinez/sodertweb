import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginangularloginfirebaseComponent } from './loginangularloginfirebase.component';

describe('LoginangularloginfirebaseComponent', () => {
  let component: LoginangularloginfirebaseComponent;
  let fixture: ComponentFixture<LoginangularloginfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginangularloginfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginangularloginfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
