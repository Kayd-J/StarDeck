import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { CartaService } from '../services/carta.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Carta } from '../models/carta';
import { StatusI } from '../models/status-i';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.css']
})
export class CrearCartaComponent implements OnInit {
  @Input() carta? : Carta;
  @Output() cartaActualizadas = new EventEmitter<Carta[]>();

 

  constructor(private api:ApiService) { }


  imageUrl = ""

  ngOnInit(): void {
  }

  cartaForm=new FormGroup({
    id:new FormControl(),
    energia:new FormControl(),
    raza:new FormControl(),
    costo:new FormControl(),
    nombre:new FormControl(),
    tipo:new FormControl(),
    descripcion:new FormControl(),
    disponibilidad:new FormControl(),
    imagen:new FormControl(),
    administradoresId:new FormControl(),
  });

  nombre: string = "Vulkan"
  costo: number = 0
  energia: number = 0
  raza: string = "Humano"
  tipo: string = "basico"
  descripcion: string = "Esto es una carta"
  disponibilidad: boolean = false
  
  onselectImage(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
      }
    }
  }



  submit(form:any){
    form.id =  ("C-" + Math.floor(Math.random() * (900000000000 - 3 + 1) + 3)).toString(); //asignar un ID random
    form.imagen = this.imageUrl
    form.administradoresId = "1";

    console.log(this.cartaForm.value)

    this.api.addCarta(form).subscribe(data=>{
      //let dataResponse:StatusI = data;
      console.log(data)
    });
  }
}
