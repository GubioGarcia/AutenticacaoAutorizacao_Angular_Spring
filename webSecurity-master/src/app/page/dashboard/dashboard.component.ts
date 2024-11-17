import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import { ProfileComponent } from "../profile/profile.component";
import { UtilService } from '../../service/util.service';
import { UserComponent } from "../user/user.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ProfileComponent,
    UserComponent,
    ButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  title: string = '';
  isAdmin: boolean = false;

  constructor(private _router: Router,
    private _service: AuthServiceService,
    private utilService: UtilService) {
  }

  ngOnInit() {
    this.isAdmin = this._service.isAdmin;
  }

  dashboard(){
    this._router.navigate(['/dashboard']);
  }

  adm() {
    this._router.navigate(['/admin']);
  }

  profile(){
    this._router.navigate(['/profile']);
  }

  logout(){
    this._service.logout();
  }
}
