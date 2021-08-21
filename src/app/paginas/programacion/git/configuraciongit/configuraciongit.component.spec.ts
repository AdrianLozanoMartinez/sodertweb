import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraciongitComponent } from './configuraciongit.component';

describe('ConfiguraciongitComponent', () => {
  let component: ConfiguraciongitComponent;
  let fixture: ComponentFixture<ConfiguraciongitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraciongitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraciongitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
