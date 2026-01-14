import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(form : NgForm) {
    this.auth.login({
            username: this.username,
            password: this.password
        }).subscribe({
            next: res => {
            this.auth.saveToken(res.access_token);
            this.router.navigate(['/home']);
            },
            error: err => {
                alert(err.error.detail);
                form.reset();
            }
        });
    }
}
