import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseangularloginfirebaseComponent } from './firebaseangularloginfirebase.component';

describe('FirebaseangularloginfirebaseComponent', () => {
  let component: FirebaseangularloginfirebaseComponent;
  let fixture: ComponentFixture<FirebaseangularloginfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseangularloginfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseangularloginfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
