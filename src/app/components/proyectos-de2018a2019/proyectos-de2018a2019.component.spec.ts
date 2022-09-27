import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019Component } from './proyectos-de2018a2019.component';

describe('ProyectosDe2018a2019Component', () => {
  let component: ProyectosDe2018a2019Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
