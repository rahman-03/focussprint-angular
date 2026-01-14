import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
    API = 'https://focussprint.onrender.com';

    constructor(private http: HttpClient) {}

    getTodos() {
        return this.http.get<any[]>(`${this.API}/todos/`);
    }

    
    getTodoById(id: string) {
        return this.http.get<any[]>(`${this.API}/todos/todo/${id}`);
    }


    addTodo(payload: any) {
        return this.http.post(`${this.API}/todos/todo`, payload);
    }

    updateTodo(id: string, payload: any) {
        return this.http.put(`${this.API}/todos/todo/${id}`, payload);
    }

    deleteTodo(id: string) {
        return this.http.delete(`${this.API}/todos/todo/${id}`);
    }
}