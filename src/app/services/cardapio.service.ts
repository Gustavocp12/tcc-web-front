import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  postCardapio(formData: FormData){
    this.http.post('http://localhost:3000/cardapio', formData, this.authService.httpOptionsMultipart).subscribe(
      (result: any) => {
        console.log("Cardápio postado com sucesso!");
      },
      (error: any) => {
        console.log("Erro ao postar cardápio!", error);
      }
      );
  }

}
