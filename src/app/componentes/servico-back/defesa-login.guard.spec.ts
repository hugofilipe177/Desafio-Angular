import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { defesaLoginGuard } from './defesa-login.guard';

describe('defesaLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => defesaLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
