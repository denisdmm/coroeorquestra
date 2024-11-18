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
  nome?: string;
  nomeAbreviado?: string;
  cpf? : number;
  senha?: number;
  email?: EmailValidator
  dataNascimento?: Date;
  instrumento?: string;
  dataVencimento?: Date;
  membroIC?: boolean;
  autorizadoPastor?: boolean;
  contratoObrigatorio?: boolean;
  loginName?: string;

 }
