import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P6Component } from './proyectos-de2016a2017-p6.component';

describe('ProyectosDe2016a2017P6Component', () => {
  let component: ProyectosDe2016a2017P6Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
