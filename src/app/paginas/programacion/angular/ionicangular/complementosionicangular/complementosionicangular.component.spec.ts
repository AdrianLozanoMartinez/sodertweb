import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementosionicangularComponent } from './complementosionicangular.component';

describe('ComplementosionicangularComponent', () => {
  let component: ComplementosionicangularComponent;
  let fixture: ComponentFixture<ComplementosionicangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementosionicangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementosionicangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
