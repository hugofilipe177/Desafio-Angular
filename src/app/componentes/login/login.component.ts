import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})





export class LoginComponent {
  nome = new FormControl('');
  senha = new FormControl('');
  
  nomeErro: string = "";
  senhaErro: string = "";

  updateName(field: FormControl, fieldName: string): string {
    if(this.nome.value || this.senha.value === ''){
      return `Por favor, digite ${fieldName}`;
    }
   return ''; 
  }

  atualizarErro(){
    this.nomeErro = this.updateName(this.nome, 'seu Nome');
    this.senhaErro = this.updateName(this.senha, 'sua Senha');
  }
}
