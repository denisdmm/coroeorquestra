import { Component } from '@angular/core';
import { AuthService } from './componentes/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coroeorquestra';

  isAuthenticaded: Boolean = false

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.isAuthenticaded.subscribe(
      autenticado => this.isAuthenticaded = autenticado

    );
  }
}
