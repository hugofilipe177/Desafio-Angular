import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

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
constructor (private http: HttpClient){}

api_login(nome: string | null, senha: string | null): Observable<any> {  
  return this.http.post('http://localhost:3001/login', { nome, senha });
};

api_Carro(): Observable<any>{
  return this.http.get('http://localhost:3001/vehicles')
}

}
