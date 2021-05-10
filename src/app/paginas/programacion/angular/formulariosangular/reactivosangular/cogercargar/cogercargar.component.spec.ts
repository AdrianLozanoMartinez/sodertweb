import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CogercargarComponent } from './cogercargar.component';

describe('CogercargarComponent', () => {
  let component: CogercargarComponent;
  let fixture: ComponentFixture<CogercargarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CogercargarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CogercargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
