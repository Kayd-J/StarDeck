import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { CartaService } from '../services/carta.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carta } from '../models/carta';
import { StatusI } from '../models/status-i';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.css']
})
export class CrearCartaComponent implements OnInit {
  @Input() carta? : Carta;
  @Output() cartaActualizadas = new EventEmitter<Carta[]>();



  constructor(private api:ApiService, private http: HttpClient) { }


  imageUrl = ""

  ngOnInit(): void {
  }

  cartaForm=new FormGroup({
    id:new FormControl(),
    energia:new FormControl('',[Validators.required]),
    raza:new FormControl('',[Validators.required]),
    costo:new FormControl('',[Validators.required]),
    nombre:new FormControl('',[Validators.required]),
    tipo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
    disponibilidad:new FormControl(),
    imagen:new FormControl(),
    administradoresId:new FormControl(),
  });

  get energiav(){
    return this.cartaForm.get('energia')
  }

  get razav(){
    return this.cartaForm.get('raza')
  }

  get costov(){
    return this.cartaForm.get('costo')
  }

  get nombrev(){
    return this.cartaForm.get('nombre')
  }

  get tipov(){
    return this.cartaForm.get('tipo')
  }

  get descripcionv(){
    return this.cartaForm.get('descripcion')
  }

  nombre: string = ""
  costo: number = 0
  energia: number = 0
  raza: string = ""
  tipo: string = ""
  descripcion: string = "Esto es una carta"
  disponibilidad: boolean = true

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
      console.log(data);
    });
  }
}
