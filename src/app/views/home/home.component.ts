import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor( private githubService: GithubService ) { }

  pesquisaFormControl: FormControl = new FormControl('');
  usuarioPesquisado: string = '';

  ngOnInit(): void {
    this.pesquisaFormControl.valueChanges.subscribe(value => {
      this.usuarioPesquisado = value;
    })
  }

  onSubmit(): void {
    this.githubService.getUsuario(this.usuarioPesquisado).subscribe(usuario => {
      console.log(usuario)
    }, error => {
      console.log(error)
    })
  }
}
