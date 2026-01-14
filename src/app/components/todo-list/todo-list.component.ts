import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
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
    this.todo.getTodos().subscribe(res => this.todos = res);
  }
}
