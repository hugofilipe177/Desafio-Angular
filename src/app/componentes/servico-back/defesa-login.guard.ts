import { inject, InjectionToken } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicoBackComponent } from './servico-back.service';


export const defesaLoginGuard: CanActivateFn = (route, state) => {
  // const servico = inject(ServicoBackService);
  // const router = inject(Router);

  return true;
};
