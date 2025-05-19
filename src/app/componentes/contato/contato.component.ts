import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contato',
  imports: [ ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
 contatoForm: FormGroup;
  tipoSelecionado: 'email' | 'telefone' | '' = '';

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required],
      sugestao: ['']
    });
  }

  onTipoChange() {
    this.tipoSelecionado = this.contatoForm.get('tipo')!.value;
    this.contatoForm.get('valor')!.reset();
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log('Dados do formulário:', this.contatoForm.value);
    } else {
      console.warn('Formulário inválido:', this.contatoForm);
    }
  }

}
