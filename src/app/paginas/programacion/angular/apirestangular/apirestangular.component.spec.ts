import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirestangularComponent } from './apirestangular.component';

describe('ApirestangularComponent', () => {
  let component: ApirestangularComponent;
  let fixture: ComponentFixture<ApirestangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApirestangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApirestangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
