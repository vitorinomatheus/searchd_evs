import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perfil-header',
  templateUrl: './perfil-header.component.html',
  styleUrls: ['./perfil-header.component.css']
})
export class PerfilHeaderComponent {

  @Output()
  pesquisaEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor( private router: Router) {}

  onSearch(retornoPesquisa: string | Object): void {
    if(typeof(retornoPesquisa) == 'object') {
      console.log(retornoPesquisa)
    } else {
      this.pesquisaEmitter.emit()
    }
  }
}
