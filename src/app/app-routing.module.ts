import { PerfilComponent } from './views/perfil/perfil.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "perfil", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
