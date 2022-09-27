import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P3Component } from './proyectos-de2016a2017-p3.component';

describe('ProyectosDe2016a2017P3Component', () => {
  let component: ProyectosDe2016a2017P3Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
