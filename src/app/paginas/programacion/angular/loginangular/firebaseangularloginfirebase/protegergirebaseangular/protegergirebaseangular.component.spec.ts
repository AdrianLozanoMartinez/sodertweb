import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegergirebaseangularComponent } from './protegergirebaseangular.component';

describe('ProtegergirebaseangularComponent', () => {
  let component: ProtegergirebaseangularComponent;
  let fixture: ComponentFixture<ProtegergirebaseangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegergirebaseangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegergirebaseangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
