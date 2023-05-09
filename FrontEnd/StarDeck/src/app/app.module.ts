import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearCartaComponent } from './crear-carta/crear-carta.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { MatchComponent } from './match/match.component';
import { CrearPlanetaComponent } from './crear-planeta/crear-planeta.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { CrearDeckComponent } from './crear-deck/crear-deck.component';
import { SelecDeckComponent } from './selec-deck/selec-deck.component';
import { VigilanteGuard } from './vigilante.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearCartaComponent,
    RegistroComponent,
    MainPageComponent,
    MatchComponent,
    CrearPlanetaComponent,
    MatchmakingComponent,
    CrearDeckComponent,
    SelecDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: MainPageComponent },
      { path: "login", component: LoginComponent },
      { path: "registro", component: RegistroComponent },
      { path: "match", component: MatchComponent, canActivate: [VigilanteGuard] },
      { path: "crear-carta", component: CrearCartaComponent, canActivate: [VigilanteGuard] },
      { path: "crear-planeta", component: CrearPlanetaComponent, canActivate: [VigilanteGuard] },
      { path: "matchmaking", component: MatchmakingComponent, canActivate: [VigilanteGuard] },
      { path: "crear-deck", component: CrearDeckComponent, canActivate: [VigilanteGuard] }
    ]),
  ],
  exports:[
    LoginComponent,
    CrearCartaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
