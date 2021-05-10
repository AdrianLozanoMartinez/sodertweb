import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglosestaticComponent } from './arreglosestatic.component';

describe('ArreglosestaticComponent', () => {
  let component: ArreglosestaticComponent;
  let fixture: ComponentFixture<ArreglosestaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArreglosestaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglosestaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
