import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Culto } from 'src/app/models/culto.model';

@Injectable({
  providedIn: 'root'
})
export class CultosService {

  //url = 'http://localhost:3000/cultos'; // api rest fake
  // url = 'https://my-json-server.typicode.com/denisdmm/dbjsoncultosahava/cultos'; // api rest fake
  //url = 'https://my-json-server.typicode.com/denisdmm//dbCultosAhava0724/cultos'; // api rest fake
  // url = 'https://my-json-server.typicode.com/denisdmm//culto1Sem2025/cultos'; // api rest fake
  url = 'https://my-json-server.typicode.com/denisdmm/ahavaauto2025/cultos'; // api rest fake


  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os cultos
  getCultos(): Observable<Culto[]> {
    return this.httpClient.get<Culto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getCultosId(id: number): Observable<Culto[]> {
    return this.httpClient.get<Culto[]>(this.url + '/' + id)
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

