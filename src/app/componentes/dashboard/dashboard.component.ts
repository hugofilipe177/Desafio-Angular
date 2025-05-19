import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule }     from '@angular/forms';  
import { ServicoBackComponent } from '../servico-back/servico-back.service';
import { CommonModule } from '@angular/common';
import { Veiculo, vinVeiculos } from '../../models/veiculo.model'
import { HeaderComponent } from '../header/header.component';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  vehicles: Veiculo[] = [];
  vinVeiculos: vinVeiculos[] = [];
  selectForm!: Veiculo; 
  termoBusca: string = '';
  dropdownWidth: string = 'auto';
  carSelecionado = signal<Veiculo | null>(null);
  vinSelecionado = signal<vinVeiculos | null>(null);
  pesquisaVin: string | any;

constructor(private router:Router, private servicoBack: ServicoBackComponent){}

selectCar = new FormGroup({
  selectedCar: new FormControl<string |number | null>(null)
});


  
mudarcarro(carroAtual: string){
   const found = this.vehicles.find(v => v.id == Number(carroAtual));
   this.carSelecionado.set(found!)
}

pesquisarVin(vin: string){
  this.servicoBack.api_vin(vin).subscribe({
    next: resp => {
      this.vinSelecionado.set(resp)
    }, error: err => {console.log(err)}
  })
  
}

ngOnInit(): void {
  this.pesquisarCarros();
}

pesquisarCarros(): void {
   this.servicoBack.api_Carro().subscribe({
    next: (data: any) => {
      this.vehicles = data.vehicles;
    },
    error: (err) => {
      console.error('Erro ao carregar carros:', err);
    }
  });

  this.selectCar.controls.selectedCar.valueChanges.subscribe(id =>{
    const found = this.vehicles.find(v => v.id == id);
    if(found) {this.selectForm = found};
  })
}
}

