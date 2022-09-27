import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesLibro3Component } from './publicaciones-libro3.component';

describe('PublicacionesLibro3Component', () => {
  let component: PublicacionesLibro3Component;
  let fixture: ComponentFixture<PublicacionesLibro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesLibro3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesLibro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
