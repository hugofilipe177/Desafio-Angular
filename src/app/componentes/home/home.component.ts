import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from "../carousel/carousel.component";


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  perfilData: Usuario | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void { 
    this.modal();
    this.perfil();
  }
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
  modal(){
      const abrir_modal = new (window as any).bootstrap.Modal(document.getElementById('modal'),
      { backdrop: false });
      abrir_modal.show();
  }
}