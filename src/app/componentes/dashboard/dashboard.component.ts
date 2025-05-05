import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private _home: any;
  perfil: any;
infoperfil: any;

constructor(private router:Router, _home: HomeComponent ){}

ngOnInit(): void {
  this.menu();
  this.transferencias();
}

menu() {
  const infoperfil = this._home.perfil() ;  
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

    })
    home?.addEventListener('click', ()=> {
      this.router.navigateByUrl('/home')
    })  
  }
}
