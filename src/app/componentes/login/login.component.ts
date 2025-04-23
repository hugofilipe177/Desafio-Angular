import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
const nomeInput = document.getElementById('nome') as HTMLInputElement;
var nome: string = nomeInput? nomeInput.value :''; 

var senha: string | null = (document.getElementById('senha') as HTMLInputElement).value;

if (nome !== "" && senha !== "") {
  
}