import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreUsuarioService {

  private _usuario: any;

  public usuarioSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined)

  setUsuario(usuario: any) {
    this._usuario = usuario
  }

  getUsuario() {
    return this._usuario;
  }


}
