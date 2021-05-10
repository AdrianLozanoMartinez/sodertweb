import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciounovariasComponent } from './serviciounovarias.component';

describe('ServiciounovariasComponent', () => {
  let component: ServiciounovariasComponent;
  let fixture: ComponentFixture<ServiciounovariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciounovariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciounovariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
