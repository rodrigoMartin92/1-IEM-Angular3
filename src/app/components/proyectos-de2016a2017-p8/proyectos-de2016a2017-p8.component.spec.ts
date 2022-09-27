import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDe2016a2017P8Component } from './proyectos-de2016a2017-p8.component';

describe('ProyectosDe2016a2017P8Component', () => {
  let component: ProyectosDe2016a2017P8Component;
  let fixture: ComponentFixture<ProyectosDe2016a2017P8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDe2016a2017P8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDe2016a2017P8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
