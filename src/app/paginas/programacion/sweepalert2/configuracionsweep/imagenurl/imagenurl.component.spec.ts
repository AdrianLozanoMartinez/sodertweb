import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenurlComponent } from './imagenurl.component';

describe('ImagenurlComponent', () => {
  let component: ImagenurlComponent;
  let fixture: ComponentFixture<ImagenurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
