import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            email: [''],
            username: [''],
            firstname: [''],
            lastname: [''],
            phone_no: [''],
            role: [''],
            password: [''] // for verification
        });

        this.loadProfile();
    }

    loadProfile() {
    this.userService.getProfile().subscribe({
        next: (user: any) => {
        this.form.patchValue({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone_no: user.phone_no
            });
        },
        error: err => alert(err.error?.detail || 'Failed to load profile')
    });
    }


    submit() {
        this.userService.updateProfile(this.form.value).subscribe({
        next: () => {
            alert('Profile updated');
            this.router.navigate(['/profile']);
        },
        error: err => alert(err.error?.detail || 'Failed to update profile')
        });
    }
}