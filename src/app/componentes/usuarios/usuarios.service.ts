import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosModule } from './usuarios.module';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'api/usuarios';

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuariosModule[]>(this.API)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  deleteUsuarios(user: UsuarioModel){
      return this.http.delete<UsuarioModel> (this.API+ '/'+ user.id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

