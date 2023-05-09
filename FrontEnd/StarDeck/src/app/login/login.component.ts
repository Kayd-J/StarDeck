import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../services/api.service'
import { Router } from '@angular/router';
import { StatusI } from '../models/status-i';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  // Set a cookie
  //this.cookieService.set('myCookie', 'myValue');

// Get a cookie
 //const myCookieValue = this.cookieService.get('myCookie');

// Delete a cookie
// this.cookieService.delete('myCookie');
 /**
 *@description Funcion que se encarga de crear el formulario
 * con sus respectivas validaciones
 * @returns FormGroup
 */
  loginForm = new FormGroup({
    usuario : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })


  get usuariov(){
    return this.loginForm.get('usuario')
  }

  get passwordv(){
    return this.loginForm.get('password')
  }

  getLoginCredentials(username: string, password: string): void{

  }
 /**
 * @param form LoginI
 * @returns ResponseI
 * @description Funcion que se encarga de enviar los datos del formulario al servicio
 * para que este los envie al backend y este los procese
 */
  onLogin(form:any){
    this.api.loginByEmailCliente(form).subscribe(data =>{
      let dataResponse:StatusI = data;
      console.log(data);
      if(dataResponse.status == "Ok"){
        // Set a cookie
        this.cookieService.set('UserCookie', "");
        this.router.navigate(["/crearCarta"]);
      }
      if(dataResponse.status == "Error"){/*
        this.api.loginByEmailAdmin(form).subscribe(data =>{
          console.log(data);
          let dataResponse:StatusI = data;
          // detectar si es un Admin
          if(dataResponse.status == "Ok"){
            this.router.navigate(["menuAdmin"]);
          }
          if(dataResponse.status == "Error"){
            alert("Usuario o contraseña incorrectos");
          }
        })*/
        alert("Usuario o contraseña incorrectos")
      }
    })
  }

}
