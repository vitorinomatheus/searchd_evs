import { PerfilContatoComponent } from './../perfil-contato/perfil-contato.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-informacoes',
  templateUrl: './perfil-informacoes.component.html',
  styleUrls: ['./perfil-informacoes.component.css']
})
export class PerfilInformacoesComponent implements OnInit{

  @Input()
  usuario: any

  constructor(public dialog: MatDialog) {}

  private _usuarioAvatar: string = '';

  ngOnInit() {
    this._usuarioAvatar = this.usuario.avatar_url;
  }

  openDialog(): void {
    this.dialog.open(PerfilContatoComponent, {data: this.usuario})
  }
}
