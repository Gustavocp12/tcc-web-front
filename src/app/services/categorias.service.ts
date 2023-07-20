import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/categorias';

  public postCategoria(nome: string){
    return this.http.post(this.url, { nome: nome }, this.authService.httpOptions);
  }

  public getCategorias(){
    return this.http.get(this.url, this.authService.httpOptions);
  }

  public getCategoriaById(id: number){
    return this.http.get(this.url + '/' + id, this.authService.httpOptions);
  }

  public deleteCategoria(id: number){
    return this.http.delete(this.url + '/' + id, this.authService.httpOptions);
  }

  public putCategoriaNome(id: number, nome: string){
    return this.http.put(this.url + '/name', {id: id, nome: nome}, this.authService.httpOptions);
  }


}
