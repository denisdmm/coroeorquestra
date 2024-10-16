import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../componentes/login/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(
    private authservice : AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
      if (this.authservice.usuarioEstaAutenticado()){
        return true
      }
        this.router.navigate(["/acesso"])
        return false


  }
}
