import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2018a2019P4Component } from './proyectos-de2018a2019-p4.component';

describe('ProyectosDe2018a2019P4Component', () => {
  let component: ProyectosDe2018a2019P4Component;
  let fixture: ComponentFixture<ProyectosDe2018a2019P4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2018a2019P4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2018a2019P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
