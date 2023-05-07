import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearCartaComponent } from './crear-carta/crear-carta.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CrearPlanetaComponent } from './crear-planeta/crear-planeta.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { CrearDeckComponent } from './crear-deck/crear-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearCartaComponent,
    RegistroComponent,
    MainPageComponent,
    CrearPlanetaComponent,
    MatchmakingComponent,
    CrearDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  exports:[
    LoginComponent,
    CrearCartaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }