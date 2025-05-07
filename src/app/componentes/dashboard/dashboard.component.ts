import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }     from '@angular/forms';  
import { HomeComponent } from '../home/home.component';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [ CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private _home: any;
  carro: [] | any;
  perfil: any;
  infoperfil: any;
  termoBusca: string = '';

constructor(private router:Router, private servicoBack: ServicoBackComponent){}



ngOnInit(): void {
  this.menu();
  this.transferencias();
  this.pesquisarCarros();
}

pesquisarCarros(): void {

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

