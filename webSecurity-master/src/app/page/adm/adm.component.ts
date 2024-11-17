import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from '../user/user.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [
    ProfileComponent,
    UserComponent,
    ButtonModule,
    ToastModule,
    RouterModule
  ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {
  constructor(private _router: Router, private _service: AuthServiceService) {}
}
