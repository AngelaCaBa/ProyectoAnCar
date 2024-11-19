import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoticketComponent } from './components/listadoticket/listadoticket.component';
import { NuevoticketComponent } from './components/nuevoticket/nuevoticket.component';
import { LoginComponent } from './components/login/login.component';
import { VerticketComponent } from './components/verticket/verticket.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'listadotickets', component: ListadoticketComponent },
  { path: 'agregartickets', component: NuevoticketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verticket/:id', component: VerticketComponent },
  { path: 'editarticket', component: NuevoticketComponent },
  { path: '**}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
