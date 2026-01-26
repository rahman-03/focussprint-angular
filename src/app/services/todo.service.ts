import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private API = environment.apiBaseUrl + "/todos";

    constructor(private http: HttpClient) {}

    getTodos(): Observable<any>  {
        return this.http.get(`${this.API}`);
    }

    
    getTodoById(id: string): Observable<any>  {
        return this.http.get(`${this.API}/todo/${id}`);
    }


    addTodo(payload: any): Observable<any>  {
        return this.http.post(`${this.API}/todo`, payload);
    }

    updateTodo(id: string, payload: any): Observable<any>  {
        return this.http.put(`${this.API}/todo/${id}`, payload);
    }

    deleteTodo(id: string): Observable<any>  {
        return this.http.delete(`${this.API}/todo/${id}`);
    }

    deleteAllTodos(password: string) {
        return this.http.delete<any>(`${this.API}/deleteall`, {
      body: { password }
    }
  );
}

}