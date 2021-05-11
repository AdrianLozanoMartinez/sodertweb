import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionesComponent } from './extensiones.component';

describe('ExtensionesComponent', () => {
  let component: ExtensionesComponent;
  let fixture: ComponentFixture<ExtensionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
