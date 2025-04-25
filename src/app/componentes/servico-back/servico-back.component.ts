import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-servico-back',
  imports: [],
  templateUrl: './servico-back.component.html',
  styleUrl: './servico-back.component.css'
})
export class ServicoBackComponent {
constructor (private http: HttpClient){}

api_login(): Observable<any>{  
 return this.http.get('http://localhost:3001/login');
}

login(nome:string, senha:string){
  this.http.post< {login: string} >('http://localhost:3001/login', { nome,senha }).pipe(tap(Response => {
    localStorage.setItem('login', Response.login)
  }),
  map(Response => Response.login),

).subscribe()
};


api_Carro(): Observable<any>{
  return this.http.get('http://localhost:3001/vehicles')
}

}
