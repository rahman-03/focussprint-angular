import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  originalTodos: any[] = [];

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.getTodos().subscribe({
      next: (res: any[]) => {
        this.todos = [...res];
        this.originalTodos = [...res];
      },
      error: err => alert(err.error?.detail || 'Failed to load todos')
    });
  }

  sortTodos(type: string) {
    this.todos = [...this.originalTodos];

    switch (type) {
      case 'priority-desc':
        this.todos.sort((a, b) => b.priority - a.priority);
        break;

      case 'priority-asc':
        this.todos.sort((a, b) => a.priority - b.priority);
        break;

      case 'completed':
        this.todos.sort((a, b) => Number(b.complete) - Number(a.complete));
        break;

      case 'pending':
        this.todos.sort((a, b) => Number(a.complete) - Number(b.complete));
        break;

      case 'title':
        this.todos.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }
}
