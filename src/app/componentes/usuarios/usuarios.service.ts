import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios?: any =  [
    {id:1, nome: 'Denis Moura', email: 'denis@zoeahava.net'},
    {id:2, nome: 'Manager', email: 'manager@zoeahava.net'},
    {id:3, nome: 'musicos', email: 'musicos@zoeahava.net'}
  ]


  constructor() { }

  getUsuarios(){
    return this.usuarios;
  }
}
