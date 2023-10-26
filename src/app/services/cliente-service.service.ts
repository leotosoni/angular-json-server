import { Injectable } from '@angular/core';
import { Cliente } from 'shared/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor() { }

  url:string = 'http://localhost:3000/clientes'


  async getClientes(){
    try {
      const request = await fetch(this.url)
      const data = request.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async getClienteID(id:number){
    try {
      const request = await fetch(this.url +`/${id}`)   
      const data = request.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async postCliente(cliente: Cliente){
    try {
      await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
          "Content-type" : "application/json",
        }
      })
      /* this.router.navigate(['home']) */
    } catch (error) {
      console.log(error)
    }
  }

  async deleteCliente(clienteId:number | undefined){
    try {
      const request = await fetch(`${this.url}/${clienteId}`, {
        method: "DELETE"
      })
    } catch (error) {
      console.log(error)
    }
  }

  async putCliente(cliente:Cliente ){
    try {
      const request = await fetch(`${this.url}/${cliente.id}`, {
        method: "PUT",
        body: JSON.stringify(cliente),
        headers:{
          "Content-type" : "application/json"
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
