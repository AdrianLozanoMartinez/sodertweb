import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesangularComponent } from './enlacesangular.component';

describe('EnlacesangularComponent', () => {
  let component: EnlacesangularComponent;
  let fixture: ComponentFixture<EnlacesangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacesangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
