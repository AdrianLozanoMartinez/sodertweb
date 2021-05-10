import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArranqueangularComponent } from './arranqueangular.component';

describe('ArranqueangularComponent', () => {
  let component: ArranqueangularComponent;
  let fixture: ComponentFixture<ArranqueangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArranqueangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArranqueangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
