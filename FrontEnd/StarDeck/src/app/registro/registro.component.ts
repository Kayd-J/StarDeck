import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { StatusI } from '../models/status-i';
import { from } from 'rxjs';
import { Jugador } from '../models/jugador';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @Input() nuevoJugador?: Jugador;

  constructor(private api:RegistroService,private http : HttpClient) { }

  imageUrl = ""

  ngOnInit(): void {
  }
  
  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    password : new FormControl('', Validators.required)
  })

  registerForm=new FormGroup({
    id:new FormControl(),
    usuario:new FormControl(),
    pass:new FormControl(),
    nombre:new FormControl(),
    apellidos:new FormControl(),
    nacionalidad:new FormControl(),
    correo:new FormControl(),
    estadodecuenta:new FormControl(),
    avatar:new FormControl(),
    paisesId:new FormControl(),
  });

  idForm=new FormGroup({
    id:new FormControl(),
  })

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

  generateJugador(form:any){
    //Convierte del Form al Jugador class
    this.nuevoJugador = new Jugador();
    this.nuevoJugador.id = form.id;
    this.nuevoJugador.usuario = form.usuario;
    this.nuevoJugador.pass = form.pass;
    this.nuevoJugador.nombre = form.nombre;
    this.nuevoJugador.apellidos = form.apellidos;
    this.nuevoJugador.nacionalidad = form.nacionalidad;
    this.nuevoJugador.correo = form.correo;
    this.nuevoJugador.avatar = form.avatar;
    this.nuevoJugador.paisesId = form.paisesId;

    return this.nuevoJugador;
  }
  
  jugadorExiste = false;

  submit(form:any){
    form.id =  Math.floor(Math.random() * (900000000 - 3 + 1) + 3); //asignar un ID random
    form.estadodecuenta = true;
    form.avatar=0;
    form.paisesId= 1;

    

    console.log(this.registerForm.value)
    try{
      this.api.getUserbyID(form.id).subscribe(data =>{
        let jugador:Jugador[] = data;
        if (jugador.length >0){//verifica que no hayan jugadores con el mismo ID
          this.jugadorExiste = true;
          this.submit(form)//Llamada recursiva que genera otro ID
        }
      })

    }catch(Error){
      this.jugadorExiste = false;
      console.log("no habia otro id asi")
    }

    if(this.jugadorExiste == false){
      this.generateJugador(form);
          return this.http.post<Jugador[]>(`api/Jugadores/PostJugador`,this.nuevoJugador);
    }
    else{return}


  }

}
