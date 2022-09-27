import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesLibro1Component } from './publicaciones-libro1.component';

describe('PublicacionesLibro1Component', () => {
  let component: PublicacionesLibro1Component;
  let fixture: ComponentFixture<PublicacionesLibro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesLibro1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesLibro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
