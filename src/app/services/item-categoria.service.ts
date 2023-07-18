import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ItemCategoriaService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/itemCategoria';

  postItemCategoria(idCategoria: number, idItem: number){
    this.http.post(this.url, { idCategoria: idCategoria, idItem: idItem }, this.authService.httpOptions).subscribe();
  }

}
