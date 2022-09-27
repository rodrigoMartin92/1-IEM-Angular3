import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017Component } from './proyectos-de2016a2017.component';

describe('ProyectosDe2016a2017Component', () => {
  let component: ProyectosDe2016a2017Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
