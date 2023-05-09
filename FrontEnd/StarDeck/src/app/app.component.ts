import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarDeck';
  isAdmin? = false;
  notLogged?= true;

logOut(){
  this.isAdmin= false;
  this.notLogged=true;
  //window.location.reload();
}
}
