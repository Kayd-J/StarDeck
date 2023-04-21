import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCartaComponent } from './crear-carta/crear-carta.component';

const routes: Routes = [
  { path: 'crearCarta', component: CrearCartaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
