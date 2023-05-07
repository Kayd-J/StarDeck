import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanetaComponent } from './crear-planeta.component';

describe('CrearPlanetaComponent', () => {
  let component: CrearPlanetaComponent;
  let fixture: ComponentFixture<CrearPlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlanetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
