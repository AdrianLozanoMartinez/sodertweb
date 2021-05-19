import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicangularComponent } from './ionicangular.component';

describe('IonicangularComponent', () => {
  let component: IonicangularComponent;
  let fixture: ComponentFixture<IonicangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
