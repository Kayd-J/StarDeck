import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.css']
})
export class MatchmakingComponent implements OnInit {
  jugador = "Jugador"
  rango = "Rango"

  constructor() { }

  ngOnInit(): void {
  }

}
