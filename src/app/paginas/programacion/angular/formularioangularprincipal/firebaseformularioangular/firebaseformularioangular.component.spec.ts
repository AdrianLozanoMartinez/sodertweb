import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseformularioangularComponent } from './firebaseformularioangular.component';

describe('FirebaseformularioangularComponent', () => {
  let component: FirebaseformularioangularComponent;
  let fixture: ComponentFixture<FirebaseformularioangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseformularioangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseformularioangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
