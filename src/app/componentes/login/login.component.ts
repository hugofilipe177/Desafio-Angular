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
  // formulários reativos para nome, senha e lembrar login
  nome = new FormControl('');
  senha = new FormControl('');
  auto_login = new FormControl(false);

  // mensagens de erro sobre o login
  nomeErro: string = "";
  senhaErro: string = "";
  mensagemErro: any;

  botaoTog: any

  constructor(private servico: ServicoBackComponent, private router: Router) { }

  //Criado para checar o login, ao Logar faz as seguintes coisas:
  // 1) verifica se a senha tem pelo menos 5 caracteres
  // 2) chama a API de login
  // 3) trata resposta: navega para home e salva dados ou exibe erros
  checkarLogin() {
    const erro = document.querySelectorAll('.erro');
    const validacao = this.servico.api_login(this.nome.value, this.senha.value);


    validacao.subscribe({
      next: (resposta) => {
        if (resposta.id) {
          const infoLogin = resposta;
          // se tudo for correto, ele transfere para a tela de home
          this.router.navigateByUrl('/home', { state: resposta });
          erro.forEach((elemento) => {
            elemento.innerHTML = '';
          })
        }
         // se escolheu selecionar, usa localStorage; senão, sessionStorage
        if (this.auto_login.value) {
          localStorage.setItem('loginperfil', JSON.stringify(resposta));
        } else {
          sessionStorage.setItem("loginperfil", JSON.stringify(resposta));
        }
      },
      // mostra mensagem de erro que vem da api
       error: (error) => {
        if (error.error && error.error.message) {
          this.mensagemErro = error.error.message;
        }
      }
    })
  }
  // Mostra ou esconde a senha no input
  senha_visivel() {
    this.mostrar_Senha = !this.mostrar_Senha;
  }
}