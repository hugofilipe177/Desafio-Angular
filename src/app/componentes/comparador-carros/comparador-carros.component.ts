import { Component, input, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Comparador } from '../../models/comparador';
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparador-carros',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './comparador-carros.component.html',
  styleUrl: './comparador-carros.component.css'
})
export class ComparadorCarrosComponent implements OnInit {
  comparador: Comparador[]=[];
  itemSelecionado: Comparador[]=[];

  constructor(private servicoBack:ServicoBackComponent){}
  ngOnInit(): void {
    this.comparadorInit();
  }


  comparadorInit(){
    this.servicoBack.api_comparador().subscribe({
      next: dados =>{
        console.log(dados) 
        this.comparador = dados.specs; 
      },
      error: err       => {
        console.error('Erro ao carregar specs:', err)

      }
    });
    

  } 
  checkbox(event: Event, item: Comparador){
    const checked = (event.target as HTMLInputElement).checked;
    if(checked){
      this.itemSelecionado.push(item);
    }else{
      this.itemSelecionado = this.itemSelecionado.filter(i=> i.id !== item.id);
    }
    console.log(this.itemSelecionado);
  }
  selecionado(item:Comparador){
    return this.itemSelecionado.some(i=> i.id === item.id)
  }

}
