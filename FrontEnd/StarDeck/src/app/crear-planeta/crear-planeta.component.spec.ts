import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearPlanetaComponent } from './crear-planeta.component';

describe('CrearPlanetaComponent', () => {
  let component: CrearPlanetaComponent;
  let fixture: ComponentFixture<CrearPlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
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
