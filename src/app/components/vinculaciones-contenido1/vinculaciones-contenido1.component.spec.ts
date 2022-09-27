import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionesContenido1Component } from './vinculaciones-contenido1.component';

describe('VinculacionesContenido1Component', () => {
  let component: VinculacionesContenido1Component;
  let fixture: ComponentFixture<VinculacionesContenido1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionesContenido1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinculacionesContenido1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
