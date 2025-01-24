import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from './usuarios.service';
import { UsuarioDetalheComponent } from './detalhe/usuario-detalhe/usuario-detalhe.component';

@NgModule({
  declarations: [ UsuariosComponent, UsuarioDetalheComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [],
  providers:[
    UsuariosService
  ]
})
export class UsuariosModule { }
