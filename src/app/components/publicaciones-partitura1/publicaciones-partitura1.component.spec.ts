import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartitura1Component } from './publicaciones-partitura1.component';

describe('PublicacionesPartitura1Component', () => {
  let component: PublicacionesPartitura1Component;
  let fixture: ComponentFixture<PublicacionesPartitura1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartitura1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartitura1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
