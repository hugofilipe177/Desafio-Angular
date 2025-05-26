import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);

    guard = new AuthGuard(router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when token exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue('fake-token');
    expect(guard.canActivate()).toBeTrue();
  });

  it('should block activation and redirect to /login when no token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
