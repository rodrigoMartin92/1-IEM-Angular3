import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartitura5Component } from './publicaciones-partitura5.component';

describe('PublicacionesPartitura5Component', () => {
  let component: PublicacionesPartitura5Component;
  let fixture: ComponentFixture<PublicacionesPartitura5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartitura5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartitura5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
