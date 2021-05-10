import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontangularComponent } from './fontangular.component';

describe('FontangularComponent', () => {
  let component: FontangularComponent;
  let fixture: ComponentFixture<FontangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
