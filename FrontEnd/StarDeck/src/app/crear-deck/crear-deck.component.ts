import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crear-deck',
  templateUrl: './crear-deck.component.html',
  styleUrls: ['./crear-deck.component.css']
})
export class CrearDeckComponent implements OnInit {
  itemsPerSlide = 5;
  singleSlideOffset = true;
  checkboxValue = false;
  cantidad = false

  slides : any= [
  ];
  constructor(private api: ApiService) { }

  //variables
  cardList : any = [];
  selectedCheckboxes: any[] = [];
  selected : any = [];
  numeroCartas = 0;

  ngOnInit(): void {
    this.getCartas();
  }

  // se hace un get de todas las cartas 
  getCartas(){
    this.api.getCartas().subscribe(cards =>{
      this.cardList = cards;
      this.slides = cards;
      console.log(this.cardList);
      
    });
  }

  onCheckboxChange(value:any, descripcion:any) {
    if (this.selected.includes(value)) {
      // si el valor ya está seleccionado, eliminarlo de la lista
      this.selected.splice(this.selected.indexOf(value), 1);
    } else {
      // si el valor no está seleccionado, agregarlo a la lista
      this.selected.push(value);
    }
    console.log(this.selected);
    this.contarCartas();
  }

  contarCartas(){
    this.numeroCartas = this.selected.length;
    console.log(this.selected.length);
    if (this.numeroCartas == 18){
      this.cantidad = true
    }
  }

  guardarDeck(){
    
  }
  

}
