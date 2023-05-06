import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  timeLeft = 20;
  contrincante = 'Enemigo'; // username de enemigo
  imgUser = 'assets/Images/user.jpg' // imagen de perfil del jugador
  imgEnemy = 'assets/Images/user.jpg' // imagen de perfil del enemigo
  jugador = 'Jugador' // username de usuario
  dinero = 500; // numero de monedas del jugador

  // turno y temporizador
  turno = 'Jugador';
  temporizador: any;

  // para los planetas
  pName1 = 'Planeta 1';
  pName2 = 'Planeta 2';
  pName3 = 'Planeta 3';

  // informacion de la carta 1
  imageUrl1 = "assets/Images/R.jpeg"
  raza1 = 'uno';
  tipo1 = 'uno';
  nombre1 = 'carta';
  descripcion1 = 'carta 1';
  costo1 = 0;
  energia1 = 0;
  
  // informacion de la carta 2
  imageUrl2 = "assets/Images/R.jpeg"
  raza2 = 'uno';
  tipo2 = 'uno';
  nombre2 = 'carta';
  descripcion2 = 'carta 2';
  costo2 = 0;
  energia2 = 0;

  // informacion de la carta 3
  imageUrl3 = "assets/Images/R.jpeg"
  raza3 = 'uno';
  tipo3 = 'uno';
  nombre3 = 'carta';
  descripcion3 = 'carta 3';
  costo3 = 0;
  energia3 = 0;

  // informacion de la carta 4
  imageUrl4 = "assets/Images/R.jpeg"
  raza4 = 'uno';
  tipo4 = 'uno';
  nombre4 = 'carta';
  descripcion4 = 'carta 4';
  costo4 = 0;
  energia4 = 0;

  // informacion de la carta 5
  imageUrl5 = "assets/Images/R.jpeg"
  raza5 = 'uno';
  tipo5 = 'uno';
  nombre5 = 'carta';
  descripcion5 = 'carta 5';
  costo5 = 0;
  energia5 = 0;

  // informacion de la carta 6
  imageUrl6 = "assets/Images/R.jpeg"
  raza6 = 'uno';
  tipo6 = 'uno';
  nombre6 = 'carta';
  descripcion6 = 'carta 6';
  costo6 = 0;
  energia6 = 0;

  // informacion de la carta 7
  imageUrl7 = "assets/Images/R.jpeg"
  raza7 = 'uno';
  tipo7 = 'uno';
  nombre7 = 'carta';
  descripcion7 = 'carta 7';
  costo7 = 0;
  energia7 = 0;




  constructor() { }
  ngOnInit() { 
    this.startTimer();
  }

  // Funcion que inicia la cuenta regresiva
  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 20;
        this.changeTurn()
      }
    }, 1000)
  }
  
  changeTurn(){
    if (this.turno == this.jugador){
      this.turno = this.contrincante;
    } else {
      this.turno = this.jugador;
    }
  }


}
