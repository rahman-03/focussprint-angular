import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title = '';
  description = '';
  priority = 1;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  addTodo() {
    const payload = {
      title: this.title,
      description: this.description,
      priority: this.priority,
      complete: false
    };

    this.todoService.addTodo(payload).subscribe({
      next: () => {
        this.router.navigate(['/todos']);
      },
      error: err => alert(err.error?.detail || 'Failed to add todo')
    });
  }
}

