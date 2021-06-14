import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0angularComponent } from './auth0angular.component';

describe('Auth0angularComponent', () => {
  let component: Auth0angularComponent;
  let fixture: ComponentFixture<Auth0angularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0angularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0angularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
