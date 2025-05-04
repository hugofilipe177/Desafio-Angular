import { booleanAttribute, Component, inject, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServicoBackComponent } from '../servico-back/servico-back.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  @Input()infoLogin: string | undefined;

  nome = new FormControl('');
  senha = new FormControl('');
  
  nomeErro: string = "";
  senhaErro: string = "";
  mensagemErro: any;

  constructor(private servico: ServicoBackComponent, private router: Router){}

  updateName(field: FormControl, fieldName: string): string {
    if(!this.nome.value || this.senha.value === ''){
      return `Por favor, digite ${fieldName}`;
    }
   return ''; 
  }

  atualizarErro(){
    this.nomeErro = this.updateName(this.nome, 'seu Nome');
    this.senhaErro = this.updateName(this.senha, 'sua Senha');
  }
  checkarLogin() {
    const erro = document.querySelectorAll('.erro');
    const nome = this.nome.value || '';
    const botao_submit = document.querySelector('#botao_submit')
    const validacao = this.servico.api_login(this.nome.value ,this.senha.value);    
    const senhaValue = this.senha.value || '';
    if (senhaValue.length < 5) {
      this.senhaErro = 'A senha deve conter no mínimo 5 caracteres.';
    }
    if(senhaValue.length >= 5 && nome.length >= 4 ){
      botao_submit?.classList.add('botao_certo');
    }
    validacao.subscribe({ next:(resposta)=> {if(resposta.id){
     const infoLogin = resposta;
     console.log(resposta)

      this.router.navigateByUrl('/home', { state: resposta });
      erro.forEach((elemento) => {
        elemento.innerHTML = '';
      })
        }
      }, error: (error) => {
        if(error.error && error.error.message){
          this.mensagemErro = error.error.message;
        }
      }
    }) 

  }
}
