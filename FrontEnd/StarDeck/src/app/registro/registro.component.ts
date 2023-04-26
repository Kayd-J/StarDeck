import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  imageUrl = ""

  ngOnInit(): void {
  }

  registerForm=new FormGroup({
    userName:new FormControl(),
    nacionalidad:new FormControl(),
    name:new FormControl(),
    lastName:new FormControl(),
    password:new FormControl(),
    correo:new FormControl(),
    disponibilidad:new FormControl(),
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

  preview(){
    this.lastName = this.registerForm.value.lastName
    this.nacionalidad = this.registerForm.value.nacionalidad
    this.password = this.registerForm.value.password
    this.name = this.registerForm.value.name
    this.correo = this.registerForm.value.correo
    this.estado = this.registerForm.value.disponibilidad
  }
  submit(){
    console.log(this.registerForm.value)
  }

}
