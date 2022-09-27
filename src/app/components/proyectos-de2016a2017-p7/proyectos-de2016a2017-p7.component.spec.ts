import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P7Component } from './proyectos-de2016a2017-p7.component';

describe('ProyectosDe2016a2017P7Component', () => {
  let component: ProyectosDe2016a2017P7Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
