import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { UserService } from '../../../service/user.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ToastModule,
    DropdownModule
  ],
  providers: [MessageService],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  username: string = '';
  password: string = '';
  role: string | null = null;

  roles = [
    { label: 'Administrador', value: 'ADMIN' },
    { label: 'Gerente', value: 'GERENTE' },
    { label: 'Usuário', value: 'USER' }
  ];

  constructor(private router: Router, private userService: UserService, private messageService: MessageService) {}

  adicionarUser() {
    if (!this.username || this.username.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O nome não pode estar vazio.' });
      return;
    }
    if (!this.password || this.password.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A senha não pode estar vazia.' });
      return;
    }
    if (!this.role) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Selecione uma permissão para o usuário.' });
      return;
    }

    const novoUser = new User(this.username, this.password, [this.role as string]);

    this.userService.adicionarUser(novoUser).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Usuário adicionado com sucesso!' });
        this.limparFormulario();
      },
      error: (err) => {
        console.error('Erro ao adicionar o usuário', err);
        const errorMessage = err.error.message || 'Erro ao adicionar o usuário.';
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: errorMessage });
      }
    });
  }

  limparFormulario() {
    this.username = '';
    this.password = '';
    this.role = null;
  }

  adm() {
    this.router.navigate(['/admin']);
  }
}
