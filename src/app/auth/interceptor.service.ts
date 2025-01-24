import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './auth.dto';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Adicionar token ao cabeçalho da requisição
    const authToken = this.authService.getAccessToken();
    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
    // Passa a requisição para o próximo manipulador
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Verifica se o erro é de autenticação (401 Unauthorized)
        if (error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.refreshToken().pipe(
      switchMap((response: AuthResponseDto) => {
        const newToken = response.accessToken;
        // Clona a requisição original com o novo token
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${newToken}`
          }
        });
        return next.handle(clonedReq);
      }),
      catchError(error => {
        this.authService.logout(); // Desloga o usuário em caso de falha no refresh
        return throwError(() => error);
      })
    );
  }
}
