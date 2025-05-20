import { Component, input, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Comparador } from '../../models/comparador';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparador-carros',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './comparador-carros.component.html',
  styleUrl: './comparador-carros.component.css'
})
export class ComparadorCarrosComponent implements OnInit {
  comparador: Comparador[] = [];
  form!: Comparador;
  carroSelecionado = signal<Comparador | null>(null);
  carro1: Comparador | null = null;
  carro2: Comparador | null = null;

  selectCar = new FormGroup({
    car1Selected: new FormControl<number | null>(null),
    car2Selected: new FormControl<number | null>(null),
  });
  carros = signal<Comparador[] | null>(null)

  constructor(private router: Router, private servicoBack: ServicoBackComponent) { }


  ngOnInit(): void {
    this.pesquisarCarros();
    this.pesquisarCarros2();
  }

  pesquisarCarros(): void {
    this.servicoBack.api_comparador().subscribe({
      next: data => {
        this.carros.set(data.specs)
        console.log(data)
      },
      error: (err) => {
        console.error('Erro ao carregar carros:', err);
      }
    });

<<<<<<< HEAD
  } 
  checkbox(event: Event, item: Comparador) {
    const checked = (event.target as HTMLInputElement).checked;
    if(checked){
      if(this.itemSelecionado.length >= 2){
        (event.target as HTMLInputElement).checked = false;
        alert('voce')
      }
    }
    if (checked) {
      if (!this.itemSelecionado.some(i => i.id === item.id)) {
        this.itemSelecionado.push(item);
      }
    } else {
      this.itemSelecionado = this.itemSelecionado.filter(i => i.id !== item.id);
    }
    console.log('Selecionados:', this.itemSelecionado);
=======
    this.selectCar.controls.car1Selected.valueChanges.subscribe(id => {
      console.log(id)
      this.carro1 = this.carros()!.find(c => c.id === id) ?? null;
      console.log(this.carro1);
    });
>>>>>>> apresentação
  }

  pesquisarCarros2(): void {
    this.servicoBack.api_comparador().subscribe({
      next: data => {
        this.carros.set(data.specs)
        console.log(data)
      },
      error: (err) => {
        console.error('Erro ao carregar carros:', err);
      }
    });

    this.selectCar.controls.car2Selected.valueChanges.subscribe(id => {
      console.log(id)
      this.carro2 = this.carros()!.find(c => c.id === id) ?? null;
      console.log(this.carro2)
    });
  }
}