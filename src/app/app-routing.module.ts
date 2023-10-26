import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { NewClienteComponent } from './pages/new-cliente/new-cliente.component';
import { EditClientPageComponent } from './pages/edit-client-page/edit-client-page.component';

const routes: Routes = [
  {path:'listClients', component: ListClientesComponent},
  {path:'home', redirectTo: '/listClients'},
  {path:'', redirectTo: '/listClients', pathMatch: 'full'},
  {path:'newClient', component: NewClienteComponent},
  {path:'editClient/:id', component: EditClientPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
