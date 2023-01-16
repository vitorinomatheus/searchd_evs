import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUsuarioService {

  private _usuario: any;

  setUsuario(usuario: any) {
    this._usuario = usuario
  }

  getUsuario() {
    return this._usuario;
  }
}
