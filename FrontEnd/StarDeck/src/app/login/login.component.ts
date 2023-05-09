import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../services/api.service'
import { Router } from '@angular/router';
import { StatusI } from '../models/status-i';
import { CookieService } from 'ngx-cookie-service';
import { Jugador } from '../models/jugador';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
 *@description Funcion que se encarga de crear el formulario
 * con sus respectivas validaciones
 * @returns FormGroup
 */
  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required]),
    password : new FormControl('', Validators.required)
  })
  jugadortemplate = new Jugador();

  constructor(private api:ApiService, private navbar:AppComponent, private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

// Get a cookie
 //const myCookieValue = this.cookieService.get('myCookie');

// Delete a cookie
// this.cookieService.delete('myCookie');

  get usuariov(){
    return this.loginForm.get('usuario')
  }

  get passwordv(){
    return this.loginForm.get('password')
  }

  getUserID(username:any){
    this.api.getUsernameID(username).subscribe(data=>{
      this.jugadortemplate = data;
      console.log(this.jugadortemplate.id);
    });
    return this.jugadortemplate.id;
  }

  ParseUserId(){
    return this.jugadortemplate.id;
  }

 /**
 * @param form LoginI
 * @returns ResponseI
 * @description Funcion que se encarga de enviar los datos del formulario al servicio
 * para que este los envie al backend y este los procese
 */
  onLogin(form:any){
    this.getUserID(this.loginForm.get('usuario')?.value);
    this.api.loginByEmailCliente(form).subscribe(data =>{
      let dataResponse:StatusI = data;
      console.log(data);
      if(dataResponse.status == "Ok"){
        // Set a cookie
        this.navbar.isAdmin = false;
        this.navbar.isCliente = true;
        this.api.isAdmin = false;
        this.api.isCliente = true;
        this.router.navigate(["logged"]);
        this.cookieService.set('UserCookie', this.ParseUserId().toString());
        this.navbar.notLogged = false;

      }
      if(dataResponse.status == "Error"){
        this.api.loginByAdmin(form).subscribe(data =>{
          console.log(data);
          let dataResponse:StatusI = data;
          // detectar si es un Admin
          if(dataResponse.status == "Ok"){
            this.navbar.isAdmin = true;
            this.navbar.isCliente = false;
            this.api.isAdmin = true;
            this.api.isCliente = false;
            this.router.navigate(["logged"]);
            this.navbar.notLogged = false;

          }
          if(dataResponse.status == "Error"){
            this.api.isAdmin = undefined;
            alert("Usuario o contraseña incorrectos");
          }
        })
      }
    })
  }





}
