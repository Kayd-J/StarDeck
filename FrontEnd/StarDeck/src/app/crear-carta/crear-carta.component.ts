import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { CartaService } from '../services/carta.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Carta } from '../models/carta';

@Component({
  selector: 'app-crear-carta',
  templateUrl: './crear-carta.component.html',
  styleUrls: ['./crear-carta.component.css']
})
export class CrearCartaComponent implements OnInit {
  @Input() carta? : Carta;
  @Output() cartaActualizadas = new EventEmitter<Carta[]>();

 

  constructor(private cartaService: CartaService) { }


  imageUrl = ""

  ngOnInit(): void {
  }

  nombrecarta: string = "Vulkan"
  costo: number = 0
  energia: number = 0
  raza: string = "Humano"
  rareza: string = "basico"
  descripcion: string = "Esto es una carta"
  estado: boolean = false
  
  onselectImage(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imageUrl=event.target.result;
      }
    }
  }


  submit(carta: Carta){
    this.cartaService
    .addCarta(carta)
    .subscribe((carta: Carta[]) => this.cartaActualizadas.emit(carta));
  }

}
