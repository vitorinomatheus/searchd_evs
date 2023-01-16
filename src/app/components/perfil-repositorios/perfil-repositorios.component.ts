import { GithubService } from './../../services/github.service';
import { StoreUsuarioService } from './../../services/store-usuario.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-repositorios',
  templateUrl: './perfil-repositorios.component.html',
  styleUrls: ['./perfil-repositorios.component.css']
})
export class PerfilRepositoriosComponent implements OnInit{
  
  @Input()
  usuario: any

  public usuarioRepositorios: Array<any> = [];

  constructor( 
    private storeUsuarioService: StoreUsuarioService,
    private githubService: GithubService) {}

  ngOnInit(): void {
    this.usuario = this.storeUsuarioService.getUsuario();

    this.githubService.getUsuarioRepositorios(this.usuario.login).subscribe(repos => {
      this.usuarioRepositorios = repos;
      console.log(repos)
    })
  }
}
