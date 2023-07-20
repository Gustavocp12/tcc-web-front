import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/itens';

  public postItens(formData: FormData){
    return this.http.post(this.url, formData, this.authService.httpOptionsMultipart);
  }

  public getItens(){
    return this.http.get(this.url, this.authService.httpOptions);
  }

  public putItensCategoria(id: number, idCategoria: number){
    return this.http.put(this.url, {idCategoria: idCategoria, id: id}, this.authService.httpOptions);
  }

  public getItensCategoria(idCategoria: number){
    return this.http.get(this.url + '/categoria/' + idCategoria, this.authService.httpOptions);
  }

  public getItemById(id: number){
    return this.http.get(this.url + '/' + id, this.authService.httpOptions);
  }

  public putItemCategoriaParaNulo(id: number){
    return this.http.put(this.url + '/null', {id: id}, this.authService.httpOptions);
  }

  public putItemPorId(id: number, formData: FormData){
    return this.http.put(this.url + '/' + id, formData, this.authService.httpOptionsMultipart);
  }

  public deleteItem(id: number){
    return this.http.delete(this.url + '/' + id, this.authService.httpOptions);
  }

}
