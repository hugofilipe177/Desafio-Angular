import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  @Input() infoLogin: string | undefined;
  mostrar_Senha: boolean = false
  nome = new FormControl('');
  senha = new FormControl('');
  auto_login = new FormControl(false);

  nomeErro: string = "";
  senhaErro: string = "";
  mensagemErro: any;

  botaoTog: any

  constructor(private servico: ServicoBackComponent, private router: Router) { }


  checkarLogin() {
    const erro = document.querySelectorAll('.erro');
    const validacao = this.servico.api_login(this.nome.value, this.senha.value);


    validacao.subscribe({
      next: (resposta) => {
        localStorage.setItem('token', resposta.token);
    
        if (this.auto_login.value) {
          localStorage.setItem('loginperfil', JSON.stringify(resposta));
        } else {
          sessionStorage.setItem('loginperfil', JSON.stringify(resposta));
        }
    
        this.router.navigateByUrl('/home', { state: resposta });
      },
       error: (error) => {
        if (error.error && error.error.message) {
          this.mensagemErro = error.error.message;
        }
      }
    })
  }
  senha_visivel() {
    this.mostrar_Senha = !this.mostrar_Senha;
  }
}