import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseusoComponent } from './firebaseuso.component';

describe('FirebaseusoComponent', () => {
  let component: FirebaseusoComponent;
  let fixture: ComponentFixture<FirebaseusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
