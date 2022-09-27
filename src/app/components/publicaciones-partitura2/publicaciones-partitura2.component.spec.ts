import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartitura2Component } from './publicaciones-partitura2.component';

describe('PublicacionesPartitura2Component', () => {
  let component: PublicacionesPartitura2Component;
  let fixture: ComponentFixture<PublicacionesPartitura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartitura2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartitura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
