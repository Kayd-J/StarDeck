import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RegistroComponent } from './registro.component';

describe('(3) TEST del componente "RegistroComponent"', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el Registro Component', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar Registro Invalido', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.registerForm;
    const email = app.registerForm.controls['correo'];
    email.setValue('testUnitario@gmail.com')
    expect(form.invalid).toBeTrue();
  });

  it('Debe retornar Registro Valido', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.registerForm;
    const email = app.registerForm.controls['correo'];
    const usuario = app.registerForm.controls['usuario'];
    const password = app.registerForm.controls['pass'];
    const nombre = app.registerForm.controls['nombre'];
    const apellidos = app.registerForm.controls['apellidos'];
    const nacionalidad = app.registerForm.controls['nacionalidad'];

    email.setValue('testUnitario@gmail.com')
    usuario.setValue('testUnitarioUser')
    password.setValue('testUnitarioPassword')
    nombre.setValue('testUnitarioNombre')
    apellidos.setValue('testUnitarioApellido')
    nacionalidad.setValue('testUnitarioNacion')
    
    expect(form.valid).toBeTrue();
  });

});
