import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrofirebaseangularrComponent } from './registrofirebaseangularr.component';

describe('RegistrofirebaseangularrComponent', () => {
  let component: RegistrofirebaseangularrComponent;
  let fixture: ComponentFixture<RegistrofirebaseangularrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrofirebaseangularrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrofirebaseangularrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
