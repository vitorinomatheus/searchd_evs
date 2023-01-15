import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private http: HttpClient) { }

    apiUrl = "https://api.github.com/users";

    getUsuario(nome: string): Observable<any> {
        return this.http.get<Observable<any>>(`${this.apiUrl}/${nome}`);
    }

    getUsuarioRepositorios(nome: string) {
        return this.http.get<Observable<any>>(`${this.apiUrl}/${nome}/repos`);
    }
}