import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivapersonalizadaComponent } from './directivapersonalizada.component';

describe('DirectivapersonalizadaComponent', () => {
  let component: DirectivapersonalizadaComponent;
  let fixture: ComponentFixture<DirectivapersonalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivapersonalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivapersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
