import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { StatusI } from '../models/status-i';
import { from } from 'rxjs';
import { ApiService } from '../services/api.service'
import { Jugador } from '../models/jugador';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Input() nuevoJugador?: Jugador;

  constructor(private api:ApiService,private http : HttpClient) { }

  imageUrl = ""

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    password : new FormControl('', Validators.required)
  })

  registerForm=new FormGroup({
    id:new FormControl(),
    usuario:new FormControl('', Validators.required),
    pass:new FormControl('', Validators.required),
    nombre:new FormControl('', Validators.required),
    apellidos:new FormControl('', Validators.required),
    nacionalidad:new FormControl('', Validators.required),
    correo:new FormControl('',[Validators.required, Validators.email]),
    estadodecuenta:new FormControl(),
    avatar:new FormControl(),
    paisesId:new FormControl(),
  });

  get usuariov(){
    return this.registerForm.get('usuario')
  }

  get passv(){
    return this.registerForm.get('password')
  }

  get nombrev(){
    return this.registerForm.get('nombre')
  }

  get apellidosv(){
    return this.registerForm.get('apellidos')
  }

  get nacionalidadv(){
    return this.registerForm.get('nacionalidad')
  }

  get correov(){
    return this.registerForm.get('correo')
  }



  



  password = "password"
  lastName = "Apellido"
  nacionalidad = "Costarricense"
  name = "Nombre"
  correo = "ejemplo@gmail.com"
  estado = false

  onselectImage(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
      }
    }
  }


  jugadorExiste = false;

  submit(form:any){
    form.id =  ("U-" + Math.floor(Math.random() * (900000000000 - 3 + 1) + 3)).toString(); //asignar un ID random
    form.estadodecuenta = true;
    form.avatar=0;
    form.paisesId= "1";

    console.log(this.registerForm.value)

    this.api.addJugador(form).subscribe(data=>{
      let dataResponse:StatusI = data;

    })

  }

}
