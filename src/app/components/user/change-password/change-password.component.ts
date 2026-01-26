import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.form = this.fb.group({
        old_pass: [''],
        new_pass: [''],
        conf_pass: ['']
        });
    }

    submit() {
        this.userService.changePassword(this.form.value).subscribe({
        next: () => {
            alert('Password changed successfully');
            this.router.navigate(['/profile']);
        },
        error: err => alert(err.error?.detail || 'Failed to update password')
        });
    }

}
