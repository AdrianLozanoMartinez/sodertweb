import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firebase2formaComponent } from './firebase2forma.component';

describe('Firebase2formaComponent', () => {
  let component: Firebase2formaComponent;
  let fixture: ComponentFixture<Firebase2formaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firebase2formaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firebase2formaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
