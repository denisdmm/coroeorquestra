import { Component } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { AuthService } from 'src/app/componentes/login/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuario-update',
  standalone: true,
  imports: [],
  templateUrl: './usuario-update.component.html',
  styleUrl: './usuario-update.component.css'
})
export class UsuarioUpdateComponent {
  isAuthenticaded: Boolean = false

  constructor(
    private authService: AuthService,
    private usuariosService : UsuariosService,
    protected activeModal: NgbActiveModal,

   ) { }


  ngOnInit(): void {  }

  clear(): void {
    this.activeModal.dismiss();
  }

  create(){}
}
