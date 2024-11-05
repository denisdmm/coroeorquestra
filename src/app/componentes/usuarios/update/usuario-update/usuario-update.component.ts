import { Component } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuario-update',
  standalone: true,
  imports: [],
  templateUrl: './usuario-update.component.html',
  styleUrl: './usuario-update.component.css'
})
export class UsuarioUpdateComponent {


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
