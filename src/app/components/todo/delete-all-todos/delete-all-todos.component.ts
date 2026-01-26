import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-all-todos',
  imports: [ReactiveFormsModule],
  templateUrl: './delete-all-todos.component.html',
  styleUrl: './delete-all-todos.component.css'
})
export class DeleteAllTodosComponent {
    loading = false;
    form: FormGroup;
    
    
    constructor(
        private fb: FormBuilder,
        private todoService: TodoService,
        private router: Router
    ) {
        this.form = this.fb.group({
            password: ['', Validators.required]
        });
        
    }

    submit() {
        if (this.form.invalid) return;

        this.loading = true;
        if (confirm("This will permanently delete ALL your todos.\nThis action cannot be undone.\nDo you want to continue?")){
            this.todoService.deleteAllTodos(this.form.value.password!).subscribe({
            next: () => {
                this.router.navigate(['/todos']);
            },
            error: err => {
                alert(err.error?.detail || 'Failed to delete todos');
                this.loading = false;
            }
            });
        }else{
            this.router.navigateByUrl('/todos');
        }
    }
}