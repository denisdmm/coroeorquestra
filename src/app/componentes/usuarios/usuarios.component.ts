import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UsuariosService } from './usuarios.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioUpdateComponent } from './update/usuario-update/usuario-update.component';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { catchError, of, tap } from 'rxjs';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = []
  private modalRef: NgbModalRef | null = null;

  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.fetchUsuarios();
    }
  }
  openUsuarioNewPopUp(): void {
    this.modalService.open(UsuarioUpdateComponent, { size: 'lg', backdrop: 'static' });
  }

  getUsuariosService() {
    this.usuariosService.getUsuarios()
      .subscribe((usuarios: UsuarioModel[]) => {
        this.usuarios = usuarios;
      })
  }

  deleteUsuario(user: UsuarioModel) {
    this.usuariosService.deleteUsuarios(user).subscribe(() => {
      this.getUsuariosService

    });
  }

  private fetchUsuarios(): void {
    this.usuariosService.getUsuarios().pipe(
      tap((data) => {
        this.usuarios = data;
      }),
      catchError((error) => {
        console.error('Erro ao buscar usuários:', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    ).subscribe(); // O subscribe é necessário para acionar o Observable
  }
}
