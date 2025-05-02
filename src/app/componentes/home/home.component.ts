import { Component, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  infoLogin = { nome: '', email: '' };
  nome: string | any;
  email:string | any;

  constructor(private router: Router) {}

  ngOnInit(): void { 
    this.menu();
    const state = history.state;
    if (state && state.nome && state.email) {
      this.infoLogin = state;
    }
  }
  login(){
  }
  // login(){
  //   @Input()  {}
  // }

  menu() {
    const menu_aparecer = document.getElementById('botao');
    const offcanvas_base = document.getElementById('menuLateral');
    const offcanvas = new (window as any).bootstrap.Offcanvas(offcanvas_base);
    let aberto = false;
    
    menu_aparecer?.addEventListener('click', () => {
      if(aberto){
        offcanvas.hide()
       
      } else{
        offcanvas.show();
      }
      offcanvas_base?.addEventListener('hidden.bs.offcanvas', ()=>{ 
        aberto = false;
      })
      
    });
  
  }  
  logout(){
    const sair = document.getElementById('logout');
    sair?.addEventListener('click', () =>{
      this.router.navigateByUrl('/')
    })
    
      
  }
}
