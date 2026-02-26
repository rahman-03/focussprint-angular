import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-user',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './admin-edit-user.component.html',
  styleUrl: './admin-edit-user.component.css'
})
export class AdminEditUserComponent implements OnInit {
    id!: number;
    form!: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private adminService: AdminService,
        private fb: FormBuilder,
        private router: Router
    ) {}
    
    ngOnInit() {
        this.form = this.fb.group({
            email: [''],
            username: [''],
            firstname: [''],
            lastname: [''],
            role: [''],
            is_active: [true],
            phone_no: ['']
        });
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        this.adminService.getUserById(this.id).subscribe({
        next: user => {
            this.form.patchValue(user);
        },
        error: (err) => alert(err.error?.detail || 'Failed to load user detail')
        });
    }

    deleteUser() {
        if (!confirm('Are you sure you want to delete this user?')) return;

        this.adminService.deleteUser(this.id).subscribe({
            next: () => {
                this.router.navigate(['/admin/users']);
                },
                error: err => alert(err.error?.detail || 'Failed to delete user')
            }
        );
    }

    updateUser() {
        if (this.form.invalid) return;

        this.adminService.updateUser(this.id, this.form.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
        });
    }
}
