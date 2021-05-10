import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenbootComponent } from './imagenboot.component';

describe('ImagenbootComponent', () => {
  let component: ImagenbootComponent;
  let fixture: ComponentFixture<ImagenbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
