import { GithubService } from './../../services/github.service';
import { StoreUsuarioService } from './../../services/store-usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface GetRepositorios {
  nome: string,
  page: number;
}

@Component({
  selector: 'app-perfil-repositorios',
  templateUrl: './perfil-repositorios.component.html',
  styleUrls: ['./perfil-repositorios.component.css']
})
export class PerfilRepositoriosComponent implements OnInit{
  
  @Input()
  usuario: any

  public usuarioRepositorios: Array<any> = [];
  public pageIndex: number = 0;
  public paginatorLength?: number;
  public pageSize: number = 4;

  constructor( 
    private storeUsuarioService: StoreUsuarioService,
    private githubService: GithubService) {}

  ngOnInit(): void {
    this.usuario = this.storeUsuarioService.getUsuario();

    this.paginatorLength = this.usuario.public_repos;

    const getRepositorios: GetRepositorios = {
      nome: this.usuario.login,
      page: 1
    }

    this.githubService.getUsuarioRepositorios(getRepositorios).subscribe(repos => {
      this.usuarioRepositorios = repos;
    })
  }

  handlePageChange(pageEvent: PageEvent): void {

    let getRepositorios: GetRepositorios = {
        nome: this.usuario.login,
        page: pageEvent.pageIndex++
      }

    this.githubService.getUsuarioRepositorios(getRepositorios).subscribe(repos => {
      this.usuarioRepositorios = repos;
    })
  }
}
