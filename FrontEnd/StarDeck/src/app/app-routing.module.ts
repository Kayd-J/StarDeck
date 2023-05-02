import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCartaComponent } from './crear-carta/crear-carta.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearPlanetaComponent } from './crear-planeta/crear-planeta.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { CrearDeckComponent } from './crear-deck/crear-deck.component';

const routes: Routes = [
  { path: 'crearCarta', component: CrearCartaComponent},
  { path: 'Home', component:MainPageComponent },
  { path: 'Register', component:RegistroComponent },
  { path: 'crearPlaneta', component: CrearPlanetaComponent },
  { path: 'buscarPartida', component: MatchmakingComponent },
  { path: 'crearDeck', component: CrearDeckComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
