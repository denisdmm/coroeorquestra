import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UsuarioDetalheComponent } from './detalhe/usuario-detalhe/usuario-detalhe.component';

const usuariosRoutes: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children : [
    { path: ':id', component: UsuarioDetalheComponent }

  ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usuariosRoutes)
  ],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
