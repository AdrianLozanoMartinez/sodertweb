import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarloginComponent } from './navbarlogin.component';

describe('NavbarloginComponent', () => {
  let component: NavbarloginComponent;
  let fixture: ComponentFixture<NavbarloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
