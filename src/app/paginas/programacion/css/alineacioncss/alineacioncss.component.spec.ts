import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineacioncssComponent } from './alineacioncss.component';

describe('AlineacioncssComponent', () => {
  let component: AlineacioncssComponent;
  let fixture: ComponentFixture<AlineacioncssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlineacioncssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineacioncssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
