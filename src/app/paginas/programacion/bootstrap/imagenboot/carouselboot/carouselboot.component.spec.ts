import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselbootComponent } from './carouselboot.component';

describe('CarouselbootComponent', () => {
  let component: CarouselbootComponent;
  let fixture: ComponentFixture<CarouselbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
