import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CrearPlanetaComponent } from './crear-planeta.component';

describe('(4) TEST del componente "CrearPlanetaComponent"', () => {
  let component: CrearPlanetaComponent;
  let fixture: ComponentFixture<CrearPlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ CrearPlanetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el CrearPlanetaComponent', () => {
    const fixture = TestBed.createComponent(CrearPlanetaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar Planeta Invalido', () => {
    const fixture = TestBed.createComponent(CrearPlanetaComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.planetForm;
    const nombre = app.planetForm.controls['nombre'];
    nombre.setValue('testUnitarioPlanetaNombre')
    expect(form.invalid).toBeTrue();
  });

  it('Debe retornar Planeta Valido', () => {
    const fixture = TestBed.createComponent(CrearPlanetaComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.planetForm;
    const nombre = app.planetForm.controls['nombre'];
    const tipo = app.planetForm.controls['tipo'];
    const descripcion = app.planetForm.controls['descripcion'];
    const habilidad = app.planetForm.controls['habilidad'];

    nombre.setValue('testUnitarioPlanetaNombre')
    tipo.setValue('testUnitarioPlanetatipo')
    descripcion.setValue('testUnitarioPlanetadescripcion')
    habilidad.setValue('testUnitarioPlanetahabilidad')

    expect(form.valid).toBeTrue();
  });
});
