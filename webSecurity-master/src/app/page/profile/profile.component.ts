import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthServiceService } from '../../service/auth-service.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    nome: '',
    active: '',
    nivelAcesso: ''
  };

  constructor(private _router: Router, private _service: AuthServiceService) {
  }

  ngOnInit(): void {
    const loggedUser = this._service.getLoggedUser();
    if (loggedUser) {
      this.user.nome = loggedUser.username;
      this.user.active = loggedUser.active ? 'Ativo' : 'Inativo';
      this.user.nivelAcesso = loggedUser.roles.join();
    } else {
      this._router.navigate(['/login']);
    }
  }

  home(){
    this._router.navigate(['/home']);
  }

  logout(){
    this._service.logout();
  }
}
