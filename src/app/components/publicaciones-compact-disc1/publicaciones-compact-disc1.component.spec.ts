import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesCompactDisc1Component } from './publicaciones-compact-disc1.component';

describe('PublicacionesCompactDisc1Component', () => {
  let component: PublicacionesCompactDisc1Component;
  let fixture: ComponentFixture<PublicacionesCompactDisc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesCompactDisc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesCompactDisc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
