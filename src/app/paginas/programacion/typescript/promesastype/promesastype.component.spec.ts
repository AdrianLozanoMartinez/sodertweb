import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromesastypeComponent } from './promesastype.component';

describe('PromesastypeComponent', () => {
  let component: PromesastypeComponent;
  let fixture: ComponentFixture<PromesastypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromesastypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromesastypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
