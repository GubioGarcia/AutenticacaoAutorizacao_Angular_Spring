import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ButtonModule } from 'primeng/button';

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


  constructor(private router: Router) {
  }

  login(){
    this.router.navigate(['/login']);
  }

  adm(){
    this.router.navigate(['/admin']);
  }

  dashboard(){
    this.router.navigate(['/dashboard']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }
}
