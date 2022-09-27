import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P4Component } from './proyectos-de2016a2017-p4.component';

describe('ProyectosDe2016a2017P4Component', () => {
  let component: ProyectosDe2016a2017P4Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
