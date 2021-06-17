import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginloginangularComponent } from './loginloginangular.component';

describe('LoginloginangularComponent', () => {
  let component: LoginloginangularComponent;
  let fixture: ComponentFixture<LoginloginangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginloginangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginloginangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
