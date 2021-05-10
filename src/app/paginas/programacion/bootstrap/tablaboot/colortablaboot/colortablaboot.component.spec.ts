import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColortablabootComponent } from './colortablaboot.component';

describe('ColortablabootComponent', () => {
  let component: ColortablabootComponent;
  let fixture: ComponentFixture<ColortablabootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColortablabootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColortablabootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
