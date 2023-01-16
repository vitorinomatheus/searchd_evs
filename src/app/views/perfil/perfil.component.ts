import { StoreUsuarioService } from './../../services/store-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  public usuario: any;

  constructor(private storeUsuarioService: StoreUsuarioService) {}

  ngOnInit(): void {
    /* Erro caso não haja usuario storado */
    this.usuario = this.storeUsuarioService.getUsuario();
    console.log(this.usuario)
  }
}
