import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciopadreehijoComponent } from './serviciopadreehijo.component';

describe('ServiciopadreehijoComponent', () => {
  let component: ServiciopadreehijoComponent;
  let fixture: ComponentFixture<ServiciopadreehijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciopadreehijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciopadreehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
