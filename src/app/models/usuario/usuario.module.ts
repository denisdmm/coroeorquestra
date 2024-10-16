import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule {
  id?: number;
  isActive?: boolean;
  nomeUsuario?: string;
  sobrenomeUsuario?: string;
  cpf? : number;
  senha?: number;
  email?: EmailValidator
  dataNascimento?: Date;


 }
