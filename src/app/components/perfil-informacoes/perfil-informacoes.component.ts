import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-informacoes',
  templateUrl: './perfil-informacoes.component.html',
  styleUrls: ['./perfil-informacoes.component.css']
})
export class PerfilInformacoesComponent implements OnInit{

  @Input()
  usuario: any

  private usuarioAvatar: string = '';

  ngOnInit() {
    this.usuarioAvatar = this.usuario.avatar_url;
  }
}
