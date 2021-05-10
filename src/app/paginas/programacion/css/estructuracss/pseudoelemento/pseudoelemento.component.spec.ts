import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoelementoComponent } from './pseudoelemento.component';

describe('PseudoelementoComponent', () => {
  let component: PseudoelementoComponent;
  let fixture: ComponentFixture<PseudoelementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoelementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoelementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
