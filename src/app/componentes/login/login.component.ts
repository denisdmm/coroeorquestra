import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    // console.log(this.login);
    try {
      const resultLogin = await this.authService.validarLogin(this.login);
      // console.log(resultLogin);
    } catch (error) {
      console.log(error);
    }

  }

}
