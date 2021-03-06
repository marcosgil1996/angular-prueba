import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { EditArticuloComponent } from './componentes/edit-articulo/edit-articulo.component';
import { LoginComponent } from './componentes/login/login.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'articulos', component:ArticulosComponent},
  {path: 'updateArticulo/:num', component:EditArticuloComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
