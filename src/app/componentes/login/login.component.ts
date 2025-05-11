import { Component, Input, OnInit } from '@angular/core';
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


export class LoginComponent implements OnInit{
  @Input()infoLogin: string | undefined;
  mostrar_Senha:boolean = false
  nome = new FormControl('');
  senha = new FormControl('');
  auto_login = new FormControl(false);
  
  nomeErro: string = "";
  senhaErro: string = "";
  mensagemErro: any;
  botaoTog: any

  constructor(private servico: ServicoBackComponent, private router: Router){}
  ngOnInit(): void { 
    this.nome.valueChanges.subscribe(() => this.alteração_cor());
    this.senha.valueChanges.subscribe(() => this.alteração_cor());
  }
  alteração_cor(){
    const nome = this.nome.value || '';
    const botao_submit = document.querySelector('#botao_submit')  
    const senhaValue = this.senha.value || '';

    if(senhaValue.length >= 5 && nome.length >= 4 ){
      botao_submit?.classList.add('botao_certo');
      botao_submit?.classList.remove('botao_errado');
    }else {
      botao_submit?.classList.remove('botao_certo');
      botao_submit?.classList.add('botao_errado');
  }
}
  checkarLogin() {
    const erro = document.querySelectorAll('.erro');
    const validacao = this.servico.api_login(this.nome.value ,this.senha.value);    
    const senhaValue = this.senha.value || '';
    if (senhaValue.length < 5) {
      this.senhaErro = 'A senha deve conter no mínimo 5 caracteres.';
    }
   
    validacao.subscribe({ next:(resposta)=> {if(resposta.id){
     const infoLogin = resposta;
     console.log(resposta)
      this.router.navigateByUrl('/home', { state: resposta });
      erro.forEach((elemento) => {
        elemento.innerHTML = '';
      })
        }
          
            if(this.auto_login.value){
            localStorage.setItem('loginperfil',JSON.stringify (resposta));
            console.log(this.auto_login.value);
            
          }else{
            sessionStorage.setItem("loginperfil", JSON.stringify (resposta));
            }
      }, error: (error) => {
        if(error.error && error.error.message){
          this.mensagemErro = error.error.message;
        }
      }
    }) 
  }
    botao_toggle(){
      const botaoTog = document.getElementById('toggleSwitch') as HTMLInputElement;
      botaoTog?.addEventListener('change', function() {
      if(botaoTog.checked) {
        document.body.style.backgroundColor = '#343a40';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
      }
    });
  }
  senha_visivel(){
    this.mostrar_Senha = !this.mostrar_Senha;
  }
}