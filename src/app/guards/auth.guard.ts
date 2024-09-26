import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

// TODO: Implementar guards
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return true;
  // if (authService.loggedIn()) return true;

  // const urlTree = router.parseUrl('/login');
  // return new RedirectCommand(urlTree);
};
