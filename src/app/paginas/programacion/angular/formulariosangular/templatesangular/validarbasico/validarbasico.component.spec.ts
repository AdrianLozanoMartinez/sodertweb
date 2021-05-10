import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarbasicoComponent } from './validarbasico.component';

describe('ValidarbasicoComponent', () => {
  let component: ValidarbasicoComponent;
  let fixture: ComponentFixture<ValidarbasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarbasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarbasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
