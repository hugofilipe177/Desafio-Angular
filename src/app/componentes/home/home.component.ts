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
  }

  menu() {
    const menu_aparecer = document.querySelector('#mini_menu');
    const menuButton = document.querySelector('#Menu');
    menuButton?.addEventListener('click', () => {
      menu_aparecer?.classList.toggle('menu_aberto');
      menu_aparecer?.classList.toggle('menu_fechado');
    });
  }
}
