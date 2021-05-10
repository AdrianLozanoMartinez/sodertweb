import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonhtmlComponent } from './botonhtml.component';

describe('BotonhtmlComponent', () => {
  let component: BotonhtmlComponent;
  let fixture: ComponentFixture<BotonhtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonhtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
