import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginangularComponent } from './loginangular.component';

describe('LoginangularComponent', () => {
  let component: LoginangularComponent;
  let fixture: ComponentFixture<LoginangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
