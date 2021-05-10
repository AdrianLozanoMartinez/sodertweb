import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasededatosComponent } from './basededatos.component';

describe('BasededatosComponent', () => {
  let component: BasededatosComponent;
  let fixture: ComponentFixture<BasededatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasededatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasededatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
