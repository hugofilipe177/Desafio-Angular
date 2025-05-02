import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-servico-back',
  imports: [],
  templateUrl: './servico-back.component.html',
  styleUrl: './servico-back.component.css'
})
export class ServicoBackComponent {
constructor (private http: HttpClient, router: Router){}

api_login(nome: string | null, senha: string | null): Observable<any> {  
  return this.http.post('http://localhost:3001/login', { nome, senha });
};
api_info_perfil(nome:string, email:string ): Observable<any>{
  return this.http.post('http://localhost:3001/login', {nome, email} )
}

api_Carro(): Observable<any>{
  return this.http.get('http://localhost:3001/vehicles')
}

}
