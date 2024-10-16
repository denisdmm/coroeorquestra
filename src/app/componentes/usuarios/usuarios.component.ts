import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UsuariosService } from './usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioUpdateComponent } from './update/usuario-update/usuario-update.component';
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
    private usuariosService : UsuariosService,
    protected modalService: NgbModal,
   ) { }

  ngOnInit(): void {
    this.authService.isAuthenticaded.subscribe(
      autenticado => this.isAuthenticaded = autenticado)
    this.usuarios = this.usuariosService.getUsuarios();
  }

  openUsuarioNewPopUp(): void {
    this.modalService.open(UsuarioUpdateComponent, { size: 'lg', backdrop: 'static' });
  }

}
