import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseDto } from './auth.dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated: boolean = false;
  authStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router) { };
  private apiUrl = environment.apiUrl;

  ngOnInit() {
    // Verifica o token a cada 1 minuto
    setInterval(() => {
      if (this.isTokenExpiringSoon()) {
        this.refreshToken().subscribe(newToken => {
          if (newToken) {
            this.setNewToken(newToken);
          } else {
            this.logout();
          }
        });
      }
    }, 60000);
  }

  checkAuthStatus() {
    const authStatus = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = authStatus === 'true';
    this.authStatusChanged.emit(this.isAuthenticated);
  }

  validarLogin(login: any): Observable<any> {
    console.log(login)
    return this.http.post<any>(`${this.apiUrl}/auth/login`, login).pipe(
      tap((response: { accessToken: string; refreshToken: string; }) => {
        if (response.accessToken && response.refreshToken) {
          this.setToken(response.accessToken, response.refreshToken);
        }
      })
    );
  }

  // Método para pegar o token do localStorage
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  private setToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('isAuthenticated', 'true');
  }

  private setNewToken(payload: AuthResponseDto): void {
    localStorage.setItem('accessToken', payload.accessToken);
    localStorage.setItem('accessToken', payload.refreshToken);
    localStorage.setItem('isAuthenticated', 'true');
  }

  refreshToken(): Observable<AuthResponseDto> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return throwError(() => new Error('Nenhum refresh token encontrado.'));
    }

    return this.http.post<AuthResponseDto>(`${this.apiUrl}/auth/refresh`, { refreshToken }).pipe(
      tap(response => {
        this.setNewToken(response); // Armazena o novo access e refresh token
      }),
      catchError(error => {
        console.error('Erro ao renovar o token:', error);
        return throwError(() => error);
      })
    );
  }

  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      return false; // Se o token não existir, o usuário não está logado
    }

    const payload = this.decodeToken(accessToken);
    if (!payload) {

      if (payload.expiration) {

      }
      return false; // Se o payload não puder ser decodificado, o token é inválido
    }

    return true
  }

  isTokenExpiringSoon(): boolean {
    const token = this.getAccessToken();
    if (!token) return true;

    const expiryDate = this.getExpiryDateFromToken(token);
    if (!expiryDate) return true;

    const timeLeft = expiryDate.getTime() - Date.now();
    return timeLeft < 5 * 60 * 1000; // Verifica se faltam menos de 5 minutos
  }

  private getExpiryDateFromToken(token: string): Date | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp ? new Date(payload.exp * 1000) : null;
    } catch (e) {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.setItem('isAuthenticated', 'false');
    this.authStatusChanged.emit(false)
    // location.reload()
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload)); // Decodifica o payload
    } catch (error) {
      return null; // Retorna null se a decodificação falhar
    }
  }

  private isTokenExpired(expiration: number): boolean {
    const currentTime = Math.floor(Date.now() / 1000); // Tempo atual em segundos
    return expiration < currentTime; // Retorna true se o token estiver expirado
  }

}
