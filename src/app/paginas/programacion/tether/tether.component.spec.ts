import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetherComponent } from './tether.component';

describe('TetherComponent', () => {
  let component: TetherComponent;
  let fixture: ComponentFixture<TetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
