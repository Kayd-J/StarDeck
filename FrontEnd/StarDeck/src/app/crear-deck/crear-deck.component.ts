import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private api: ApiService, private login:LoginService) { }

  //variables
  cardList : any = [];
  selectedCheckboxes: any[] = [];
  selected : any = [];
  numeroCartas = 0;
  nombreDeck = ''

  ngOnInit(): void {
    this.getCartas();
  }

  get nombrev(){
    return this.deckForm.get('nombre')
  }

  deckForm=new FormGroup({
    id:new FormControl(),
    nombre:new FormControl('',[Validators.required]),
    jugadoresId:new FormControl(),
  });

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
    }else{
      this.cantidad = false
    }
  }

  guardarDeck(){
    
  }
  
  submit(form:any){
    form.id =  ("D-" + Math.floor(Math.random() * (900000000000 - 3 + 1) + 3)).toString(); //asignar un ID random
    form.nombre = this.nombreDeck;
    form.jugadoresId = this.login.jId;
    form.jugadoresId = "1";

    console.log(form);
    

    this.api.addDeck(form).subscribe(data=>{
      //let dataResponse:StatusI = data;
      console.log(data)
    });
  }

}
