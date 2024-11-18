import { Component } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTitleComponent } from 'src/app/shared/components/form-title/form-title.component';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'app-usuario-update',
  standalone: true,
  imports: [
    FormTitleComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent {
  userEditForm: FormGroup;

  constructor(
    private authService: AuthService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private usuarioService: UsuariosService
  ) {
    // Inicializando o formulário com os campos necessários
    this.userEditForm = this.fb.group({
      nome: new FormControl<string | null>(null, [Validators.required]),
      nomeAbreviado: new FormControl<string | null>(null, [Validators.required]),
      dataNascimento: new FormControl<string | null>(null, [Validators.required]),
      instrumento: new FormControl<string | null>(null, [Validators.required]),
      cpf: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/) // Validação de CPF com regex
      ]),
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      dataVencimento: new FormControl<string | null>(null),
      membroIC: new FormControl<boolean>(true), // Membro da IC, por padrão marcado como true
      autorizadoPastor: new FormControl<boolean>(false), // Caso membroIC não seja marcado, este será necessário
      contratoObrigatorio: new FormControl<boolean>(true), // Campo já com valor padrão true
      isActive: new FormControl<boolean>(true),
      loginName: new FormControl<string >("",[Validators.required]),
      senha: new FormControl<string>("",[Validators.required]),
      refrestoken: new FormControl<string | null>(null)
    });

    // Subscrição para mostrar ou esconder o campo "autorizadoPastor"
    this.userEditForm.get('membroIC')?.valueChanges.subscribe((value: boolean) => {
      const autorizadoPastorControl = this.userEditForm.get('autorizadoPastor');
      if (autorizadoPastorControl) {
        if (!value) {
          autorizadoPastorControl.setValidators([Validators.required]);
        } else {
          autorizadoPastorControl.clearValidators();
        }
        autorizadoPastorControl.updateValueAndValidity();
      }
    });
  }

  ngOnInit(): void {
    // A função `updateForm` precisa ser chamada com um objeto `UsuarioModel`.
    // Se estiver recebendo o usuário de outro lugar, passe-o como argumento.
    // Aqui assumimos que o usuário foi obtido de algum serviço.
  }

  updateForm(user: UsuarioModel): void {
    this.userEditForm.patchValue({
      id: user.id ?? null,
      nome: user.nome ?? null,
      nomeAbreviado: user.nomeAbreviado ?? null,
      dataNascimento: user.dataNascimento ?? null,
      instrumento: user.instrumento ?? null,
      cpf: user.cpf ?? null,
      email: user.email ?? null,
      dataVencimento: user.dataVencimento ?? null,
      membroIC: user.membroIC,
      autorizadoPastor: user.autorizadoPastor,
      contratoObrigatorio: user.contratoObrigatorio
    });
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  create(): void {
    const formValue = this.userEditForm.getRawValue();
     // Remover a máscara do CPF, mantendo apenas os números
    formValue.cpf = formValue.cpf.replace(/\D/g, '');
    console.log (formValue.value)
    if (this.userEditForm.valid) {
      console.log('Formulário enviado:', this.userEditForm.value);
      this.usuarioService.saveUser(this.userEditForm.value).subscribe({
        next: (response) => console.log('Usuário salvo com sucesso:', response),
        error: (error) => console.error('Erro ao salvar o usuário:', error)
      });
    } else {
      console.log('Formulário inválido', this.userEditForm.value);
    }
  }
}
