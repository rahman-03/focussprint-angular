import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    private API = environment.apiBaseUrl + '/user';

    constructor(private http: HttpClient) {}

    register(payload: {
            email: string;
            username: string;
            firstname: string;
            lastname: string;
            phone_no: string;
            password: string;
        }) {
            return this.http.post(`${this.API}/create_user`, payload);
        }

    getProfile(): Observable<any> {
        return this.http.get(`${this.API}/`);
    }

    updateProfile(data: any): Observable<any> {
        return this.http.put(`${this.API}/details_change`, data);
    }

    changePassword(data: any): Observable<any> {
        return this.http.put(`${this.API}/change_pass`, data);
    }
}