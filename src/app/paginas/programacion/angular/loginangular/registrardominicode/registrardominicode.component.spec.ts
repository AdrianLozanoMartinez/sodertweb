import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrardominicodeComponent } from './registrardominicode.component';

describe('RegistrardominicodeComponent', () => {
  let component: RegistrardominicodeComponent;
  let fixture: ComponentFixture<RegistrardominicodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrardominicodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrardominicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
