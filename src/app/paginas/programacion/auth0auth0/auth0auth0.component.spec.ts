import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0auth0Component } from './auth0auth0.component';

describe('Auth0auth0Component', () => {
  let component: Auth0auth0Component;
  let fixture: ComponentFixture<Auth0auth0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0auth0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0auth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
