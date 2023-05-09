import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { Jugador } from '../models/jugador';
import { catchError, delay } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  @Input() upload: any;
	extras: any;
	fileUpload: HTMLInputElement | HTMLElement

  constructor(private http : HttpClient, private el: ElementRef, private renderer: Renderer2,) { }

  /**
   *
   * @param form Login
   * @returns StatusI
   * @description Funcion que se encarga de enviar los datos del formulario al servicio
   
  loginByEmailCliente(form:Login):Observable<StatusI>{
    let direccion = "/api/Jugadores/Login";
     console.log(form);
     console.log(direccion)
    return this.http.post<StatusI>(direccion, form);
  }
  */


  getUserbyID(id:string):Observable<Jugador[]>{
    console.log(id);
    let direccion = "/api/Jugadores/" + id;
    return this.http.get<Jugador[]>(`${direccion}`);
  }
  
  //let CLIENT_ID = '326002218372-g9228q1eg5pv01dob9n2knhniglqa3pc.apps.googleusercontent.com';
  @HostListener('click') onClick() {

		if (this.extras?.confirm === 'true') {

			//accesing the drive API
      let CLIENT_ID = '326002218372-g9228q1eg5pv01dob9n2knhniglqa3pc.apps.googleusercontent.com';
      let API_KEY = 'AIzaSyAh_qccjJWSF7qCHH3G6j0YreuM9TzSXE8'
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
      var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

			//paste credentials here

			//

			//scope access
			let http = this.http
			let ryber = this.ryber
			let fileUpload = this.fileUpload as HTMLInputElement
			//


			//load the auth SDK
			//
      gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        })
        .then(function () {
    
            // sign in if needed
            if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
                gapi.auth2.getAuthInstance().signIn();
            }
            //
        
    
            //create a folder
            if (environment.folders.create) {


              let headers = new HttpHeaders()
              headers = headers
                  .set("Authorization", `Bearer ${gapi.auth.getToken().access_token}`)
      
              http.post(
                  "https://www.googleapis.com/drive/v3/files",
                  {
                      name: "My Folder",
                      //to create a folder this must be included
                      mimeType: "application/vnd.google-apps.folder"
                      //
                  },
                  { headers, observe: 'response' }
              )
              .subscribe((result) => {
                  console.log(result)
              })
      
      
          }
            //
    
    
            //move files around
            //	
            
    
        })
        .catch(function (error) {
            console.log(error)
        })
    });

			//

		}

	}

  

}
