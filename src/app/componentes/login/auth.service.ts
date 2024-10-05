import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: Boolean = false;
  isAuthenticaded = new EventEmitter<Boolean>;

  constructor(private router: Router) { }

  validarLogin(login: Login) {
    if (login.username === "manager@ahava.net"
      && login.userpassword === "1q2w3e4r5t") {
      this.usuarioAutenticado = true
      this.isAuthenticaded.emit(true)
      this.router.navigate(["/"])

    } else {
      this.usuarioAutenticado = false
      this.isAuthenticaded.emit(false)
      this.router.navigate(["/"])
    }
  }

  logout() {
    this.usuarioAutenticado = false
    this.isAuthenticaded.emit(false)
    this.router.navigate(["/"])

  }

}
