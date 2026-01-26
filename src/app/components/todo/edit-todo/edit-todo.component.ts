import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-edit-todo',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {
    id!: string;
    title = '';
    description = '';
    priority = 1;
    complete = false;

    constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id')!;

        
        this.todoService.getTodoById(this.id).subscribe({
            next: (res: any) => {
                this.title = res.title || '';
                this.description = res.description || '';
                this.priority = res.priority || 1;
                this.complete = res.complete || false;
            },
            error: err => {
                alert(err.error?.detail || 'Failed to load todo');
            }
        });

    }

    updateTodo() {
        const payload = {
            title: this.title,
            description: this.description,
            priority: Number(this.priority),
            complete: Boolean(this.complete)
        };

        this.todoService.updateTodo(this.id, payload).subscribe({
            next: () => {
            this.router.navigate(['/todos']);
            },
            error: err => alert(err.error?.detail || 'Failed to update todo')
        });
    }

    deleteTodo() {
        if (!confirm('Are you sure you want to delete this todo?')) return;

        this.todoService.deleteTodo(this.id).subscribe({
            next: () => {
                this.router.navigate(['/todos']);
                },
                error: err => alert(err.error?.detail || 'Failed to delete todo')
            });
        }
    }
