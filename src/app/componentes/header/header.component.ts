import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    perfilData: Usuario | null = null;
    private readonly storageKey = 'loginperfil';
    
  ngOnInit(): void { 
  this.perfil();
  this.menu();
  this.transferencias();
}
  constructor(private router: Router) {}
perfil():void {
  const login = 'loginperfil';
  const storedData = sessionStorage.getItem(login) || localStorage.getItem(login);
  
  if(storedData) {
    try {
      this.perfilData = JSON.parse(storedData);
    } catch (e) {
      this.perfilData = null;
    }
  }
  
}
logout() {
  sessionStorage.clear();
  localStorage.clear();
  this.router.navigate(['/login']);
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
    this.router.navigateByUrl('/dashboard')
  })
  home?.addEventListener('click', ()=> {
    this.router.navigateByUrl('/home')
  })  
}
}

