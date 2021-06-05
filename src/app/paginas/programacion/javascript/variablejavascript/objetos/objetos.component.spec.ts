import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosComponent } from './objetos.component';

describe('ObjetosComponent', () => {
  let component: ObjetosComponent;
  let fixture: ComponentFixture<ObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
