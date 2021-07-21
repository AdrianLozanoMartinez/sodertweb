import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseserviComponent } from './firebaseservi.component';

describe('FirebaseserviComponent', () => {
  let component: FirebaseserviComponent;
  let fixture: ComponentFixture<FirebaseserviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseserviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseserviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
