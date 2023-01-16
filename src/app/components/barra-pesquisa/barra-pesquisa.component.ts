import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';
import { StoreUsuarioService } from 'src/app/services/store-usuario.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  pesquisaFormControl: FormControl = new FormControl('');
  private _usuarioPesquisado: string = '';

  @Output()
  pesquisaEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  isHeader: boolean = false;

  constructor(     
    private githubService: GithubService, 
    private storeUsuarioService: StoreUsuarioService
    ) {}
  
  ngOnInit(): void {
    this.pesquisaFormControl.valueChanges.subscribe(value => {
      this._usuarioPesquisado = value;
    })
  }

  onSearch(): void {
    this.githubService.getUsuario(this._usuarioPesquisado).subscribe(usuario => {
      this.storeUsuarioService.setUsuario(usuario);
      this.storeUsuarioService.usuarioSubject.next(usuario);
      this.pesquisaEmitter.emit(this._usuarioPesquisado);
    }, error => {
      this.pesquisaFormControl.setErrors({userNotFound: 'usuário não encontrado'})
      this.pesquisaEmitter.emit(error);
    })
  }

  getErrorMessage(): string {
    if(this.pesquisaFormControl.hasError('userNotFound')) {
      return 'Usuário não encontrado';
    } else {
      return '';
    }
  }
}
