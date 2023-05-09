import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-deck',
  templateUrl: './crear-deck.component.html',
  styleUrls: ['./crear-deck.component.css']
})
export class CrearDeckComponent implements OnInit {
  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
