import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  url: string = 'http://localhost:3000/cardapio';

  public postCardapio(formData: FormData){
    return this.http.post(this.url, formData, this.authService.httpOptionsMultipart);
  }

  public getCardapio(){
    return this.http.get(this.url, this.authService.httpOptions);
  }

}
