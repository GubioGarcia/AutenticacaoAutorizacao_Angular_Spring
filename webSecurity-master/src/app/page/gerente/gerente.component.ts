import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Router, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [
    ProfileComponent,
    UserComponent,
    ButtonModule,
    ToastModule,
    RouterModule
  ],
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent {
  constructor(private _router: Router, private _service: AuthServiceService) { }
}
