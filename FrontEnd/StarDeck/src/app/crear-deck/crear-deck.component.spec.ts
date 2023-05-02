import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDeckComponent } from './crear-deck.component';

describe('CrearDeckComponent', () => {
  let component: CrearDeckComponent;
  let fixture: ComponentFixture<CrearDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
