import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasbootComponent } from './cartasboot.component';

describe('CartasbootComponent', () => {
  let component: CartasbootComponent;
  let fixture: ComponentFixture<CartasbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
