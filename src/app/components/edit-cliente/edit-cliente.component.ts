import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Cliente } from 'shared/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit{

  id = {} as number;
  cliente = {} as Cliente

  formulario:FormGroup = this.fb.group({
    nombre: '',
    apellido: '',
    dni: '',
    fechaInicio: ''
  }) 
  constructor (private api:ClienteServiceService,
               private ruta: ActivatedRoute,
               private route: Router,
               private fb:FormBuilder) {
               }

 async ngOnInit(){
    this.ruta.params.subscribe((params:Params) => {
      this.id = params['id']})
    this.mostrarCliente(this.id)
    }

  async updateClient(){
    this.cliente.nombre = this.formulario.controls['nombre'].touched ? this.formulario.controls['nombre'].value : this.cliente.nombre
    this.cliente.apellido = this.formulario.controls['apellido'].touched ? this.formulario.controls['apellido'].value : this.cliente.apellido
    this.cliente.dni = this.formulario.controls['dni'].touched ? this.formulario.controls['dni'].value : this.cliente.dni
    this.cliente.fechaInicio = this.formulario.controls['fechaInicio'].touched ? this.formulario.controls['fechaInicio'].value : this.cliente.fechaInicio

    await this.api.putCliente(this.cliente)

    this.route.navigate(['/home'])
  }

  async mostrarCliente(id:number){
    this.cliente = await this.api.getClienteID(id)
  }
}
