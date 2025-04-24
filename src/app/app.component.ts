import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarroComponent } from './componentes/carro/carro.component';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CarroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Desafio-Angular';
}
