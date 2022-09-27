import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P1Component } from './proyectos-de2018a2019-p1.component';

describe('ProyectosDe2018a2019P1Component', () => {
  let component: ProyectosDe2018a2019P1Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
