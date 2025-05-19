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
  tipoSelecionado: 'email' | 'phone' | '' = '';

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      contactMethod: ['', Validators.required],
      email: ['', []],
      phone: ['', []],
      contactReason: ['', Validators.required],
      message: ['', Validators.required]
    });

    // Ajusta validações quando o método de contato muda
    this.contatoForm.get('contactMethod')!.valueChanges.subscribe(method => {
      this.tipoSelecionado = method;
      const emailCtrl = this.contatoForm.get('email')!;
      const phoneCtrl = this.contatoForm.get('phone')!;

      if (method === 'email') {
        emailCtrl.setValidators([Validators.required, Validators.email]);
        phoneCtrl.clearValidators();
      } else if (method === 'phone') {
        phoneCtrl.setValidators([Validators.required]);
        emailCtrl.clearValidators();
      }

      emailCtrl.updateValueAndValidity();
      phoneCtrl.updateValueAndValidity();
    });
  }

  onTipoChange() {
    // Força disparo do valueChanges se necessário
    const current = this.contatoForm.get('contactMethod')!.value;
    this.contatoForm.get('contactMethod')!.setValue(current);
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log('Dados do formulário:', this.contatoForm.value);
      // Aqui você pode enviar para a API via serviço
    } else {
      console.warn('Formulário inválido:', this.contatoForm.errors);
    }
  }

}
