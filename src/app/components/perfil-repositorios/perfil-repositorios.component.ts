import { GithubService } from './../../services/github.service';
import { StoreUsuarioService } from './../../services/store-usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-perfil-repositorios',
  templateUrl: './perfil-repositorios.component.html',
  styleUrls: ['./perfil-repositorios.component.css']
})
export class PerfilRepositoriosComponent implements OnInit {
 
  @Input()
  usuarioChange: any

  usuario: any;

  public usuarioRepositorios: Array<any> = [];
  public repositoriosPaginados: Array<any> = [];
  public pageIndex: number = 0;
  public paginatorLength?: number;
  public pageSize: number = 4;
  public pageNumber: number = 1;

  constructor( 
    private storeUsuarioService: StoreUsuarioService,
    private githubService: GithubService) {}

  ngOnInit(): void {

    this.storeUsuarioService.usuarioSubject.subscribe(usuario => {
      this.usuario = usuario;
      this.getRepos(usuario.login);
    })
    
  }

  getRepos(usuarioLogin: string): void {

    this.paginatorLength = this.usuario.public_repos;

    this.githubService.getUsuarioRepositorios(usuarioLogin).subscribe(repos => {
      
      repos.sort((a: any, b: any) => {
        return b.stargazers_count - a.stargazers_count;
      });
      
      this.usuarioRepositorios = repos;
      this.repositoriosPaginados = this.usuarioRepositorios.slice((this.pageNumber - 1), this.pageSize);
    })
  }

  handlePageChange(pageEvent: PageEvent): void {

    this.repositoriosPaginados = this.usuarioRepositorios.slice(pageEvent.pageIndex * pageEvent.pageSize, 
      pageEvent.pageSize * (pageEvent.pageIndex + 1))  
  }

  goToRepoUrl(url: string): void {
    console.log(url)
    window.open(url, '_blank')
  }
}
