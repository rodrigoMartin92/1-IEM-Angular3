import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesLibro2Component } from './publicaciones-libro2.component';

describe('PublicacionesLibro2Component', () => {
  let component: PublicacionesLibro2Component;
  let fixture: ComponentFixture<PublicacionesLibro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesLibro2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesLibro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
