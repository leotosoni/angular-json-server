import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'shared/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {

  /* cliente = {} as Cliente; */

  formulario:FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido:  ['', Validators.required],
    dni:  [0, Validators.required],
    fechaInicio:  ['', Validators.required]
  })
/*   formulario:FormGroup = this.fb.group({
    nombre: '',
    apellido:'',
    dni: '',
    fechaInicio: ''
  }) */

  constructor(private fb:FormBuilder,
              private api:ClienteServiceService,
              private router:Router){}
  
  newClient(){

    if(this.formulario.invalid){ 
      this.formulario.markAllAsTouched()
      return
    }

    const cliente: Cliente = {

      nombre : this.formulario.controls['nombre'].value,
      apellido : this.formulario.controls['apellido'].value,
      dni : this.formulario.controls['dni'].value,
      fechaInicio : this.formulario.controls['fechaInicio'].value
    }
      
    this.api.postCliente(cliente);
    
    this.router.navigate(['/home'])
  }

  validar(field:string, error:string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }
}
