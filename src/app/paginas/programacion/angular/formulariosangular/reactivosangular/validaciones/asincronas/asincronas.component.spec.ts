import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsincronasComponent } from './asincronas.component';

describe('AsincronasComponent', () => {
  let component: AsincronasComponent;
  let fixture: ComponentFixture<AsincronasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsincronasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsincronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
