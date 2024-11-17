import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router, private service: AuthServiceService) {
  }

  login(){
    this.router.navigate(['/login']);
  }

  adm(){
    this.router.navigate(['/admin']);
  }

  gerente(){
    this.router.navigate(['/gerente']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  logout(){
    this.service.logout();
  }
}
