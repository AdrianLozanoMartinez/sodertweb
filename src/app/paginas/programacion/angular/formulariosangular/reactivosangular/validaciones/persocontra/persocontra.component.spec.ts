import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersocontraComponent } from './persocontra.component';

describe('PersocontraComponent', () => {
  let component: PersocontraComponent;
  let fixture: ComponentFixture<PersocontraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersocontraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersocontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
