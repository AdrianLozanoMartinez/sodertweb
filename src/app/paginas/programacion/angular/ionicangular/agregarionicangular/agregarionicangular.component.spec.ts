import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarionicangularComponent } from './agregarionicangular.component';

describe('AgregarionicangularComponent', () => {
  let component: AgregarionicangularComponent;
  let fixture: ComponentFixture<AgregarionicangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarionicangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarionicangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
