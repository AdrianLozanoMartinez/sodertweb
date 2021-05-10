import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabrascssComponent } from './palabrascss.component';

describe('PalabrascssComponent', () => {
  let component: PalabrascssComponent;
  let fixture: ComponentFixture<PalabrascssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabrascssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabrascssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
