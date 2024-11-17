import {CanActivateFn, Router} from '@angular/router';
import {AuthServiceService} from "../service/auth-service.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isAutenticado) {
    return true;
  } else {
    alert("Você não está autenticado");
    router.navigate(['/login']);
    return false;
  }
};

