import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { jwtDecode } from "jwt-decode";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAutenticado: boolean = false;
  isAdmin: boolean = false;
  isGerente: boolean = false;
  isUser: boolean = false;
  private user: User | null = null;

  constructor(private router: Router) {
    this.restoreAuthState();
  }

  login(token: string) {
    try {
      const decodedToken: any = jwtDecode(token);
      const roles: string[] = decodedToken.roles || [];

      this.setAuthState(true, roles.includes('ADMIN'), roles.includes('GERENTE'), roles.includes('USER'));
      localStorage.setItem('token', token);

      if(roles.includes('ADMIN')) this.router.navigate(['/admin']);
      else if(roles.includes('GERENTE')) this.router.navigate(['/gerente']);
      else if(roles.includes('USER')) this.router.navigate(['/profile']);

    } catch (error) {
      console.error('Invalid token', error);
      this.logout();
    }
  }

  logout(): void {
    localStorage.clear();
    this.setAuthState(false, false, false, false);
    this.router.navigate(['/login']);
  }

  private setAuthState(authStatus: boolean, isAdmin: boolean, isGerente: boolean, isUser: boolean): void {
    this.isAutenticado = authStatus;
    this.isAdmin = isAdmin;
    this.isGerente = isGerente;
    this.isUser = isUser;

    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('adminStatus', JSON.stringify(isAdmin));
    localStorage.setItem('gerenteStatus', JSON.stringify(isGerente));
    localStorage.setItem('userStatus', JSON.stringify(isUser));
  }

  private restoreAuthState(): void {
    this.isAutenticado = JSON.parse(localStorage.getItem('authStatus') || 'false');
    this.isAdmin = JSON.parse(localStorage.getItem('adminStatus') || 'false');
    this.isGerente = JSON.parse(localStorage.getItem('gerenteStatus') || 'false');
    this.isUser = JSON.parse(localStorage.getItem('userStatus') || 'false');
  }
}
