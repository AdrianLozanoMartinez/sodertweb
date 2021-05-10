import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfireunelementohtmlComponent } from './forfireunelementohtml.component';

describe('ForfireunelementohtmlComponent', () => {
  let component: ForfireunelementohtmlComponent;
  let fixture: ComponentFixture<ForfireunelementohtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForfireunelementohtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfireunelementohtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
