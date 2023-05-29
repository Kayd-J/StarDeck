import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearCartaComponent } from './crear-carta.component';

describe('(7) TEST del componente "CrearCartaComponent"', () => {
  let component: CrearCartaComponent;
  let fixture: ComponentFixture<CrearCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CrearCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el CrearCartaComponent', () => {
    const fixture = TestBed.createComponent(CrearCartaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar Carta Invalida', () => {
    const fixture = TestBed.createComponent(CrearCartaComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.cartaForm;
    const energia = app.cartaForm.controls['energia'];
    energia.setValue('testUnitario@gmail.com')
    expect(form.invalid).toBeTrue();
  });


  it('Debe retornar Carta Valida', () => {
    const fixture = TestBed.createComponent(CrearCartaComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.cartaForm;
    const energia = app.cartaForm.controls['energia'];

    const raza = app.cartaForm.controls['raza'];
    const costo = app.cartaForm.controls['costo'];
    const nombre = app.cartaForm.controls['nombre'];
    const tipo = app.cartaForm.controls['tipo'];
    const descripcion = app.cartaForm.controls['descripcion'];
    
    energia.setValue('12')
    costo.setValue('12')
    raza.setValue('12')
    nombre.setValue('12')
    tipo.setValue('12')
    descripcion.setValue('12')

    expect(form.valid).toBeTrue();
  });
});
