import { GithubService } from './services/github.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PerfilHeaderComponent } from './components/perfil-header/perfil-header.component';
import { PerfilInformacoesComponent } from './components/perfil-informacoes/perfil-informacoes.component';
import { PerfilRepositoriosComponent } from './components/perfil-repositorios/perfil-repositorios.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    PerfilHeaderComponent,
    PerfilInformacoesComponent,
    PerfilRepositoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgPipesModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [ 
    GithubService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
