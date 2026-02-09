import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private API = environment.apiBaseUrl + "/admin";

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any[]>(`${this.API}/users`);
    }

    getUserById(id: number) {
        return this.http.get<any>(`${this.API}/users/${id}`);
    }

    updateUser(id: number, payload: any) {
        return this.http.put(`${this.API}/user_update/${id}`, payload);
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.API}/user/${id}`);
    }

}
