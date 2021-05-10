import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglosdinamicComponent } from './arreglosdinamic.component';

describe('ArreglosdinamicComponent', () => {
  let component: ArreglosdinamicComponent;
  let fixture: ComponentFixture<ArreglosdinamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArreglosdinamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreglosdinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
