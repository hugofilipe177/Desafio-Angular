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
    this.transferencias();
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
  transferencias(){
    const sair = document.querySelector('#logout');
    const dashboard = document.getElementById('dash');
    const home = document.getElementById('home')
    sair?.addEventListener('click', () =>{
      this.router.navigateByUrl('/')
    })
    dashboard?.addEventListener('click',()=>{
      this.router.navigateByUrl('')
    })
    home?.addEventListener('click', ()=> {
      this.router.navigateByUrl('/home')
      console.log('click')
    })  
  }
  modal(){
    setTimeout(()=>{
      const abrir_modal = document.getElementById('modal');
      if (abrir_modal) {
        const bootstrapModal = new (window as any).bootstrap.Modal(abrir_modal);
        bootstrapModal.show();
      }
    },0);
  }
}
