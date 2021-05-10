import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirarchivosComponent } from './subirarchivos.component';

describe('SubirarchivosComponent', () => {
  let component: SubirarchivosComponent;
  let fixture: ComponentFixture<SubirarchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirarchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirarchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
