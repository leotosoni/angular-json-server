import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { NewClienteComponent } from './pages/new-cliente/new-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClientPageComponent } from './pages/edit-client-page/edit-client-page.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarClientesComponent,
    NuevoClienteComponent,
    ListClientesComponent,
    NewClienteComponent,
    EditClientPageComponent,
    EditClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
