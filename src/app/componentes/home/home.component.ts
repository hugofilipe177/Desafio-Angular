import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CarouselInt } from '../../models/carousel';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarouselComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  perfilData: Usuario | null = null;
  Carousel: CarouselInt[]=[];
  displayItems: CarouselInt[]=[];

  ngOnInit(): void { 
    this.perfil();
    this.loadCarousel();
  }
    constructor(private servicoBack: ServicoBackComponent, private route: Router ){}
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

   loadCarousel(): void {
    this.servicoBack.api_carousel().subscribe({
      next: data => {
        this.displayItems = [...data.carousel, ...data.carousel];
      },
      error: err => console.error('Erro ao carregar carrossel:', err)
    });
  }
}