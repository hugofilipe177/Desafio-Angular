import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CarouselInt } from '../../models/carousel';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  Carousel: CarouselInt[] = [];
  currentIndex = 0;
  transformStyle = 'translateX(0px)';
  autoSlideInterval!: any;

  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  itemWidth = 0;
  itemsToShow = 3;
  maxIndex = 0;

  constructor(private servicoBack: ServicoBackComponent, private route: Router) { }

  ngOnInit(): void {
    this.onResize();
    this.CarouselFun();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
  @HostListener('window:resize')
  onResize() {
    const cw = this.container.nativeElement.clientWidth;
    this.itemsToShow = window.innerWidth <= 640 ? 1
                     : window.innerWidth <= 1024 ? 2
                     : 3;

    const totalGaps = (this.itemsToShow - 1) * cw * 0.01;
    this.itemWidth = (cw - totalGaps) / this.itemsToShow;

    this.maxIndex = Math.max(0, this.Carousel.length - this.itemsToShow);

    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
    this.updateTransform();
  }

  CarouselFun() {
    this.servicoBack.api_carousel().subscribe({
      next: (data) => {
        this.Carousel = data.carousel;
        this.maxIndex = Math.max(0, this.Carousel.length - this.itemsToShow);
        this.updateTransform();
      },
      error: (err) => console.log('Erro ao carregar carrossel:', err)
    });
  }

  next() {
    clearInterval(this.autoSlideInterval);
    this.currentIndex = this.currentIndex >= this.maxIndex
      ? 0
      : this.currentIndex + 1;
    this.updateTransform();
    this.startAutoSlide();
  }

  prev() {
    clearInterval(this.autoSlideInterval);
    this.currentIndex = this.currentIndex <= 0
      ? this.maxIndex
      : this.currentIndex - 1;
    this.updateTransform();
    this.startAutoSlide();
  }

  updateTransform() {
    this.transformStyle = `translateX(-${this.currentIndex * this.itemWidth}px)`;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.next(), 4000);
  }
}
