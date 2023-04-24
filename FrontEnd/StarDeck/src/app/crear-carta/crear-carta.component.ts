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
    idcarta:new FormControl(),
    energia:new FormControl(),
    raza:new FormControl(),
    costo:new FormControl(),
    nombrecarta:new FormControl(),
    tipo:new FormControl(),
    disponibilidad:new FormControl(),
  })

  nombrecarta = "Null"
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
    this.nombrecarta = this.cartaForm.value.nombrecarta
    this.raza = this.cartaForm.value.raza
    this.rareza = this.cartaForm.value.tipo
    this.estado = this.cartaForm.value.disponibilidad
  }
  submit(){
    console.log(this.cartaForm.value)
  }

}
