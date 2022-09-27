import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPartituraDigital1Component } from './publicaciones-partitura-digital1.component';

describe('PublicacionesPartituraDigital1Component', () => {
  let component: PublicacionesPartituraDigital1Component;
  let fixture: ComponentFixture<PublicacionesPartituraDigital1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesPartituraDigital1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesPartituraDigital1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
