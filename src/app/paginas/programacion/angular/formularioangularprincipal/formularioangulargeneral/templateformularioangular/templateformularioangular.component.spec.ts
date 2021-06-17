import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformularioangularComponent } from './templateformularioangular.component';

describe('TemplateformularioangularComponent', () => {
  let component: TemplateformularioangularComponent;
  let fixture: ComponentFixture<TemplateformularioangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformularioangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformularioangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
