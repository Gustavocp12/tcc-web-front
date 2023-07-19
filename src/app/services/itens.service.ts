import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/itens';

  postItens(formData: FormData){
    this.http.post(this.url, formData, this.authService.httpOptionsMultipart).subscribe(
      (result: any) => {
        console.log("Item adicionado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao adicionar item!", error);
      });
  }

  public getItens(){
    return this.http.get(this.url, this.authService.httpOptions);
  }

  putItensCategoria(id: number, idCategoria: number){
    this.http.put(this.url, {idCategoria: idCategoria, id: id}, this.authService.httpOptions).subscribe(
      (result: any) => {
        console.log("Item atualizado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao atualizar item!", error);
      });
  }

  public getItensCategoria(idCategoria: number){
    return this.http.get(this.url + '/categoria/' + idCategoria, this.authService.httpOptions);
  }

  getItemById(id: number){
    this.http.get(this.url + '/' + id, this.authService.httpOptions).subscribe(
      (result: any) => {
        console.log("Item carregado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao carregar item!", error);
      });
  }

  public putItemCategoriaParaNulo(id: number){
    return this.http.put(this.url + '/null/', {id: id}, this.authService.httpOptions);
  }

}
