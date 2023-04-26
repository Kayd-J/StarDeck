import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCartaComponent } from './crear-carta/crear-carta.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'crearCarta', component: CrearCartaComponent},
  { path: 'Home', component:MainPageComponent },
  { path: 'Register', component:RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
