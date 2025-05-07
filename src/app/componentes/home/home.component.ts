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
    this.modal();
  }
 perfil(){
  const Perfil = this.infoLogin;
 }

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
      this.router.navigateByUrl('/dashboard', { state:this.infoLogin })
    })
    home?.addEventListener('click', ()=> {
      this.router.navigateByUrl('/home')
    })  
  }
  modal(){
      const abrir_modal = new (window as any).bootstrap.Modal(document.getElementById('modal'),
      { backdrop: false });
      abrir_modal.show();
  }
}