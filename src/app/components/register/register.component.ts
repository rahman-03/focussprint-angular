import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  username = '';
  firstname = '';
  lastname = '';
//   role = 'user';
  phone_no = '';
  password = '';
  password2 = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    if (this.password !== this.password2) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      email: this.email,
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      role: "user",
      phone_no: this.phone_no,
      password: this.password
    };
    this.auth.register(payload).subscribe({        
        next: () => {
            alert('Registration successful! Please login.');
            this.router.navigate(['/login']);
        },
        error: err => {
            alert(err.error?.detail || 'Registration failed');
        }
    });
  }
}
