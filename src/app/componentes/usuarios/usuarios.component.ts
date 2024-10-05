import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  isAuthenticaded: Boolean = false

  constructor(
    private authService: AuthService

   ) { }

  ngOnInit(): void {
    this.authService.isAuthenticaded.subscribe(
      autenticado => this.isAuthenticaded = autenticado)
  }

}
