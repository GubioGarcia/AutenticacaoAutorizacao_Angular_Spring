import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LoginComponent} from "./page/login/login.component";
import {AdmComponent} from "./page/adm/adm.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {authGuard} from "./guard/auth.guard";
import {adminGuard} from "./guard/admin.guard";
import { gerenteGuard } from './guard/gerente.guard';
import { UserFormComponent } from './page/user/user-form/user-form.component';
import { GerenteComponent } from './page/gerente/gerente.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},

  {path: 'gerente', component: GerenteComponent, canActivate: [gerenteGuard]},

  {path: 'admin', component: AdmComponent, canActivate: [adminGuard]},
  {path: 'user-form', component: UserFormComponent, canActivate: [adminGuard]},

];
