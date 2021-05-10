import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesangularComponent } from './templatesangular.component';

describe('TemplatesangularComponent', () => {
  let component: TemplatesangularComponent;
  let fixture: ComponentFixture<TemplatesangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
