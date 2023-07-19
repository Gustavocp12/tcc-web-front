import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/categorias';

  postCategoria(nome: string){
    this.http.post(this.url, { nome: nome }, this.authService.httpOptions).subscribe(
      (result: any) => {
        console.log("Categoria criada com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao criar categoria!", error);
      });
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


}
