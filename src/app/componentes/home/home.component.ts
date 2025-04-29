import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void { 
    this.menu();
    this.perfil();
  }
  perfil(){
    const perfil:any = document.querySelector('#perfil')
    perfil.addEventListener('mouseover', ()=> {
      console.log('funciona')
    })
  }

  menu() {
    const menu_aparecer = document.querySelector('#mini_menu');
    const menuButton = document.querySelector('#Menu');
    console.log ('talvez')
    menuButton?.addEventListener('click', () => {
      menu_aparecer?.classList.add('menu_aberto');
      menu_aparecer?.classList.remove('menu_fechado');
    });
  }
}
