import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorlocalComponent } from './servidorlocal.component';

describe('ServidorlocalComponent', () => {
  let component: ServidorlocalComponent;
  let fixture: ComponentFixture<ServidorlocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidorlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidorlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
