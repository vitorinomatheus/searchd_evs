import { StoreUsuarioService } from './../../services/store-usuario.service';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor( 
    private githubService: GithubService, 
    private storeUsuarioService: StoreUsuarioService,
    private router: Router 
  ) { }

  pesquisaFormControl: FormControl = new FormControl('');
  usuarioPesquisado: string = '';

  ngOnInit(): void {
    this.pesquisaFormControl.valueChanges.subscribe(value => {
      this.usuarioPesquisado = value;
    })
  }

  onSearch(): void {
    this.githubService.getUsuario(this.usuarioPesquisado).subscribe(usuario => {
      this.storeUsuarioService.setUsuario(usuario);
      this.router.navigate(['/perfil']);
    }, error => {
      /*
        Mostrar para o usuario que houve problema - usuario não existe? 
      */
      console.log(error)
    })
  }
}
