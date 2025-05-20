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
  return this.http.post('https://api-czja.onrender.com/login', { nome, senha });
};

api_Carro(): Observable<any>{
  return this.http.get('https://api-czja.onrender.com/vehicles');
  
};
api_vin(vin:string):Observable<vinVeiculos>{
  return this.http.post<vinVeiculos>('https://api-czja.onrender.com/vehicleData', {vin} );
}
api_carousel(): Observable<any>{
  return this.http.get('https://api-czja.onrender.com/carousel');
}
api_comparador(): Observable<any>{
  return this.http.get('https://api-czja.onrender.com/vehicleSpecs');
}
}

