import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { GetRepositorios } from "../components/perfil-repositorios/perfil-repositorios.component";

@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private http: HttpClient) { }

    apiUrl = "https://api.github.com/users";

    getUsuario(nome: string): Observable<any> {
        return this.http.get<Observable<any>>(`${this.apiUrl}/${nome}`);
    }

    getUsuarioRepositorios(getRepositorios: GetRepositorios): Observable<any> {
        return this.http.get<Observable<any>>(`${this.apiUrl}/${getRepositorios.nome}/repos?per_page=4&page=${getRepositorios.page}`);
    }
}