import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P9Component } from './proyectos-de2016a2017-p9.component';

describe('ProyectosDe2016a2017P9Component', () => {
  let component: ProyectosDe2016a2017P9Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
