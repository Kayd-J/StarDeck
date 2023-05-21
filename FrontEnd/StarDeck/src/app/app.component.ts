import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarDeck';
  isAdmin? = false;
  isCliente? = false;
  notLogged?= true;
  isCheck: any;

  constructor(private api:ApiService, private cookieService: CookieService) {}

  logOut(){
  this.isAdmin= false;
  this.isCliente= false;
  this.notLogged=true;
  this.cookieService.delete('UserCookie');
  window.location.reload();
}}
