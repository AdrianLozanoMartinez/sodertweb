import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalidComponent } from './personalid.component';

describe('PersonalidComponent', () => {
  let component: PersonalidComponent;
  let fixture: ComponentFixture<PersonalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
