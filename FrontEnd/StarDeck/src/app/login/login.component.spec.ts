import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { AppComponent } from '../app.component';


describe('(2) TEST del componente "LoginComponent"', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[LoginComponent,AppComponent],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe de existir el LoginComponent', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar Login Invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.loginForm;
    const usuario = app.loginForm.controls['usuario'];
    usuario.setValue('testUnitario@gmail.com')
    expect(form.invalid).toBeTrue();
  });

  it('Debe retornar Login Valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.loginForm;
    const usuario = app.loginForm.controls['usuario'];
    const password = app.loginForm.controls['password'];
    usuario.setValue('testUnitario@gmail.com')
    password.setValue('testUnitarioPassword')
    expect(form.valid).toBeTrue();
  });


});
