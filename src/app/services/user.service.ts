import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    private API = environment.apiBaseUrl + '/user';

    constructor(private http: HttpClient) {}

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