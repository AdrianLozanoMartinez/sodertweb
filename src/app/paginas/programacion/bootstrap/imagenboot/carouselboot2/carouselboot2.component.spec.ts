import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carouselboot2Component } from './carouselboot2.component';

describe('Carouselboot2Component', () => {
  let component: Carouselboot2Component;
  let fixture: ComponentFixture<Carouselboot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carouselboot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carouselboot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
