import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartitura4Component } from './publicaciones-partitura4.component';

describe('PublicacionesPartitura4Component', () => {
  let component: PublicacionesPartitura4Component;
  let fixture: ComponentFixture<PublicacionesPartitura4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartitura4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartitura4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
