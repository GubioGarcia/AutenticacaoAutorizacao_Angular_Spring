import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];
  displayDialogView: boolean = false;
  displayDialogEdit: boolean = false;
  displayErrorDialog: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private messageService: MessageService) {}

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.userService.get().subscribe({
      next: (response) => {
        this.users = response;
      }
    });
  }
}