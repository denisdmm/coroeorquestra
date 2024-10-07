import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  isAuthenticaded: Boolean = false
  usuarios: any[] = []
  constructor(
    private authService: AuthService,
    private usuariosService : UsuariosService

   ) { }

  ngOnInit(): void {
    this.authService.isAuthenticaded.subscribe(
      autenticado => this.isAuthenticaded = autenticado)
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
