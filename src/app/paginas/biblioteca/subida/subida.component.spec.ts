import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaComponent } from './subida.component';

describe('SubidaComponent', () => {
  let component: SubidaComponent;
  let fixture: ComponentFixture<SubidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
