import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacehtmlComponent } from './enlacehtml.component';

describe('EnlacehtmlComponent', () => {
  let component: EnlacehtmlComponent;
  let fixture: ComponentFixture<EnlacehtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlacehtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
