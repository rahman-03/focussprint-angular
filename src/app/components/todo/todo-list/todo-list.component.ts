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
  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.getTodos().subscribe({
      next: (res: any[]) => {
        this.todos = [...res];
        this.sortTodos('pending-pri-asc')
      },
      error: err => alert(err.error?.detail || 'Failed to load todos')
    });
  }

  sortTodos(type: string ) :void {
    this.todos.sort((a, b) => {
        switch (type) {
          case 'priority-desc':
            return b.priority - a.priority;
    
          case 'priority-asc':
            return a.priority - b.priority;
    
          case 'completed-pri-desc':
            if(a.complete !== b.complete){
                return  Number(b.complete) - Number(a.complete);
            }
            return a.priority - b.priority;
    
          case 'pending-pri-asc':
            if(a.complete !== b.complete){
                return  Number(a.complete) - Number(b.complete);
            }
            return b.priority - a.priority;

    
          case 'title':
            return a.title.localeCompare(b.title);
        }
    });
  }
}
