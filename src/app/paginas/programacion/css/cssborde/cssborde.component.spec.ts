import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbordeComponent } from './cssborde.component';

describe('CssbordeComponent', () => {
  let component: CssbordeComponent;
  let fixture: ComponentFixture<CssbordeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbordeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
