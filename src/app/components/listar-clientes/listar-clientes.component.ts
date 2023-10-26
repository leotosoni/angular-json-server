import { Component } from '@angular/core';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Cliente } from 'shared/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  array: Cliente[] = []
  constructor(private api:ClienteServiceService){
    this.getAllClients()
    
  }

async getAllClients(){
  const clientes = await this.api.getClientes()
  clientes.forEach((element:Cliente) => {
    this.array.push(element)
  });
  };

  async deleteCliente(cliente:Cliente){
    const resp = window.confirm(`Esta seguro de eliminar a ${cliente.nombre} ${cliente.apellido} ?`)
    if (resp) {
      await this.api.deleteCliente(cliente.id)
      location.reload()
    }
  }
}

