import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJugadorComponent } from './main-jugador.component';

describe('MainJugadorComponent', () => {
  let component: MainJugadorComponent;
  let fixture: ComponentFixture<MainJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
