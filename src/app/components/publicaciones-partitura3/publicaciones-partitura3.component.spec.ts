import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartitura3Component } from './publicaciones-partitura3.component';

describe('PublicacionesPartitura3Component', () => {
  let component: PublicacionesPartitura3Component;
  let fixture: ComponentFixture<PublicacionesPartitura3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartitura3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartitura3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
