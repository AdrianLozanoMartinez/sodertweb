import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroregistroangularComponent } from './registroregistroangular.component';

describe('RegistroregistroangularComponent', () => {
  let component: RegistroregistroangularComponent;
  let fixture: ComponentFixture<RegistroregistroangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroregistroangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroregistroangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
