import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    user: any;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
    this.userService.getProfile().subscribe({
            next: (res: any) => this.user = res,
            error: err => alert(err.error?.detail || 'Failed to load profile')
        });
    }
}