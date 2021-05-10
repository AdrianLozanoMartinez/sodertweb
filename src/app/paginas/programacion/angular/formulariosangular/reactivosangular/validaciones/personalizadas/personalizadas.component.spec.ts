import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizadasComponent } from './personalizadas.component';

describe('PersonalizadasComponent', () => {
  let component: PersonalizadasComponent;
  let fixture: ComponentFixture<PersonalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
