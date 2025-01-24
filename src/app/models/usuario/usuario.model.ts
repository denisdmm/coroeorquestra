import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModel {
  id?: number;
  isActive?: boolean;
  nomeUsuario?: string;
  sobrenome?: string;
  cpf? : number;
  senha?: number;
  email?: EmailValidator
  dataNascimento?: Date;


 }
