import { Router } from '@angular/router';
import { StoreUsuarioService } from './../../services/store-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  public usuario: any;

  constructor(private storeUsuarioService: StoreUsuarioService, private router: Router) {}

  ngOnInit(): void {
   this.displayUsuario();
  }

  displayUsuario(): void {

     this.usuario = this.storeUsuarioService.getUsuario();

     if(!this.usuario) {
       alert('Erro: usuario não encontrado');
       this.router.navigate(['/home'])      
     }
  }
}
