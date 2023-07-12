import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/cardapio';

  postCardapio(formData: FormData){
    this.http.post(this.url, formData, this.authService.httpOptionsMultipart).subscribe(
      (result: any) => {
        console.log("Cardápio postado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao postar cardápio!", error);
      }
      );
  }

  getCardapio(){
    this.http.get(this.url, this.authService.httpOptions).subscribe(
      (result: any) => {
        console.log("Cardápio carregado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao carregar cardápio!", error);
      }
      );
  }

}
