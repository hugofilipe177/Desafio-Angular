import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { vinVeiculos } from '../../models/veiculo.model';



@Injectable({
  providedIn: 'root'
})
export class ServicoBackComponent { 
constructor (private http: HttpClient, router: Router, ){
  
 
 
}
logado(): boolean {
  const userLocal = localStorage.getItem('local_storage');
  const userSession = sessionStorage.getItem('session_storage');
  return !!(userLocal || userSession);
}
api_login(nome: string | null, senha: string | null): Observable<any> {  
  return this.http.post('http://localhost:3001/login', { nome, senha });
};

api_Carro(): Observable<any>{
  return this.http.get('http://localhost:3001/vehicles');
  
};
api_vin(vin:string):Observable<vinVeiculos>{
  return this.http.post<vinVeiculos>('http://localhost:3001/vehicleData', {vin} );
}
api_carousel(): Observable<any>{
  return this.http.get('http://localhost:3001/carousel');
}
api_comparador(): Observable<any>{
  return this.http.get('http://localhost:3001/vehicleSpecs');
}
}

