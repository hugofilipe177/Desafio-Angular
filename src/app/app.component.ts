import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CarroComponent } from './componentes/carro/carro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CarroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Desafio-Angular';
}
