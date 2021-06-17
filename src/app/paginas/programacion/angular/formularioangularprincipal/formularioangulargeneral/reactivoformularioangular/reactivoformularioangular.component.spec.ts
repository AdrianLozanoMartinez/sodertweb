import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoformularioangularComponent } from './reactivoformularioangular.component';

describe('ReactivoformularioangularComponent', () => {
  let component: ReactivoformularioangularComponent;
  let fixture: ComponentFixture<ReactivoformularioangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivoformularioangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoformularioangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
