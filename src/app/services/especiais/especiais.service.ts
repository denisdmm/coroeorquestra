import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Especial } from 'src/app/models/especial.model';

@Injectable({
  providedIn: 'root'
})
export class EspeciaisService {

  //url = 'http://localhost:3000/Especials'; // api rest fake
  // url = 'https://my-json-server.typicode.com/denisdmm/dbjsonEspecialsahava/Especials'; // api rest fake
  url = 'https://my-json-server.typicode.com/denisdmm//dbJsonEspeciaisAhava24/especiais'; // api rest fake


  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Especials
  getEspeciais(): Observable<Especial[]> {
    return this.httpClient.get<Especial[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getEspecialsId(id: number): Observable<Especial[]> {
    return this.httpClient.get<Especial[]>(this.url + '/' + id)
        .pipe(
            map(response => {
                if (!Array.isArray(response)) {
                    return [response]; // Garante que a resposta seja um array
                }
                return response;
            }),
            retry(2),
            catchError(this.handleError)
        );
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

