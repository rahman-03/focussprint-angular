import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent implements OnInit {
  users: any[] = [];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe({
      next: res => {
        this.users = res;
      },
      error: (err) => alert(err.error?.detail || 'Failed to load user detail')
    });
  }

  editUser(id: number) {
    this.router.navigate(['/admin/users', id]);
  }

  deleteUser(id: number) {
    if (!confirm('Delete this user?')) return;

    this.adminService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== id);
    });
  }
}
