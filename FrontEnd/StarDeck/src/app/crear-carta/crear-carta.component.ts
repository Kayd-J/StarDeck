import { Component, Input, OnInit } from '@angular/core';

import { CartaService } from '../services/carta.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.css']
})
export class CrearCartaComponent implements OnInit {

  constructor() { }

  imageUrl = ""

  ngOnInit(): void {
  }

  cartaForm=new FormGroup({
    nombre:new FormControl(),
    costo:new FormControl(),
    energia:new FormControl(),
    raza:new FormControl(),
    rareza:new FormControl(),
    estado:new FormControl(),
  })

  nombre = "Null"
  costo = "0"
  energia = "0"
  raza = "Humano"
  rareza = "basico"
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
    this.costo = this.cartaForm.value.costo
    this.energia = this.cartaForm.value.energia
    this.nombre = this.cartaForm.value.nombre
    this.raza = this.cartaForm.value.raza
    this.rareza = this.cartaForm.value.rareza
    this.estado = this.cartaForm.value.estado
  }
  submit(){
    console.log(this.cartaForm.value)
  }

}
