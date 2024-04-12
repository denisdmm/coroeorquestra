import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Ensaio } from 'src/app/models/ensaio.model';

@Injectable({
  providedIn: 'root'
})
export class EnsaioService {
  //url = 'http://localhost:3000/ensaios'; // api rest fake
  url = 'https://my-json-server.typicode.com/denisdmm/dbjsonahava/ensaios'; // api rest fake


  constructor(private httpClient: HttpClient) { }

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getEnsaios(): Observable<Ensaio[]> {
    return this.httpClient.get<Ensaio[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
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
