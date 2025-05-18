import { Component, Input, OnInit } from '@angular/core';
import { CarouselInt } from '../../models/carousel';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  Carousel: CarouselInt[]=[];
  displayItems: CarouselInt[]=[];
  router: any;
 @Input() items: CarouselInt[] = [];

  constructor(private servicoBack: ServicoBackComponent, private route: Router ){}
  ngOnInit(): void {
    this.CarouselFun();
  }

  CarouselFun(){
    this.servicoBack.api_carousel().subscribe({
      next: (data) =>{
        this.Carousel = data.carousel;

        this.displayItems = [...this.Carousel, ...this.Carousel];
        console.log('Itens do carrossel (duplicados):', this.displayItems);
      },
      error: (err) => {
        console.log('este é o erro:', err);
      }
    })
  }
  Transferencia(){
    this.route.navigateByUrl('/dashboard')
  }


}
