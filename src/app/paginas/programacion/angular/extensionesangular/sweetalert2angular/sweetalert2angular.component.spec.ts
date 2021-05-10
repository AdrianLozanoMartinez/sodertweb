import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweetalert2angularComponent } from './sweetalert2angular.component';

describe('Sweetalert2angularComponent', () => {
  let component: Sweetalert2angularComponent;
  let fixture: ComponentFixture<Sweetalert2angularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sweetalert2angularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sweetalert2angularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
