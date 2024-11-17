import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from "../service/auth-service.service";
import { inject } from "@angular/core";

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.getAuthStatus()) {
    if (authService.isAdmin) {
      return true;
    } else {
      alert("Você não tem permissão");
      router.navigate(['/dashboard']);
      return false;
    }
  } else {
    alert("Você não está autenticado");
    router.navigate(['/login']);
    return false;
  }
};