import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasbootComponent } from './letrasboot.component';

describe('LetrasbootComponent', () => {
  let component: LetrasbootComponent;
  let fixture: ComponentFixture<LetrasbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
