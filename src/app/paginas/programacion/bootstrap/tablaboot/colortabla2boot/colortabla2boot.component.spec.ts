import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colortabla2bootComponent } from './colortabla2boot.component';

describe('Colortabla2bootComponent', () => {
  let component: Colortabla2bootComponent;
  let fixture: ComponentFixture<Colortabla2bootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colortabla2bootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colortabla2bootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
