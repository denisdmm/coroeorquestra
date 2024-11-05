import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  async onSubmit() {
    this.authService.validarLogin(this.login).subscribe({
      next: () => {
        this.router.navigate(['/']); // redireciona para a página principal
        // Redireciona ou atualiza a interface, pois o login foi bem-sucedido e os tokens já estão armazenados.
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

}
