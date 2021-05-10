import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcssComponent } from './colorcss.component';

describe('ColorcssComponent', () => {
  let component: ColorcssComponent;
  let fixture: ComponentFixture<ColorcssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorcssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
