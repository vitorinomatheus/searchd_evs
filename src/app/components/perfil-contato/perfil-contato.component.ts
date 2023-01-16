import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrls: ['./perfil-contato.component.css']
})
export class PerfilContatoComponent {

  public usuario: any

  constructor(
    public dialogRef: MatDialogRef<PerfilContatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
    { 
      this.usuario = data
     }

  closeDialog(): void {
    this.dialogRef.close();
  }

  goToRoute(info: 'blog' | 'twitter'): void {
    if(info == 'blog') {
      window.open(this.usuario.blog);
    } else if(info == 'twitter') {
      window.open(`https://twitter.com/${this.usuario.twitter_username}`)
    }
    
  }
}
