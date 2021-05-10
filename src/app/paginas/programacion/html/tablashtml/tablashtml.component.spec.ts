import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablashtmlComponent } from './tablashtml.component';

describe('TablashtmlComponent', () => {
  let component: TablashtmlComponent;
  let fixture: ComponentFixture<TablashtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablashtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablashtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
