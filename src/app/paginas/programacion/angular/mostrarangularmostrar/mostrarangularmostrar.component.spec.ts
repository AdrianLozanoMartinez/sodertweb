import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarangularmostrarComponent } from './mostrarangularmostrar.component';

describe('MostrarangularmostrarComponent', () => {
  let component: MostrarangularmostrarComponent;
  let fixture: ComponentFixture<MostrarangularmostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarangularmostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarangularmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
