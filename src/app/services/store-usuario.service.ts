import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUsuarioService {

  private usuario: any;

  setUsuario(usuario: any) {
    this.usuario = usuario
  }

  getUsuario() {
    return this.usuario;
  }
}
