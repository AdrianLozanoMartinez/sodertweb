import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionfontComponent } from './configuracionfont.component';

describe('ConfiguracionfontComponent', () => {
  let component: ConfiguracionfontComponent;
  let fixture: ComponentFixture<ConfiguracionfontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionfontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
