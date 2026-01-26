import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private API = environment.apiBaseUrl;

    constructor(
        private http: HttpClient,
        private cookie: CookieService,
        private router: Router
    ) {}

    login(data: any) {
        return this.http.post<any>(
        `${this.API}/auth/token`,
        new URLSearchParams(data).toString(),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
    }

    saveToken(token: string) {
        this.cookie.set('access_token', token, {
        path: '/',
        secure: false,
        sameSite: 'Lax'
        });
    }

    getToken(): string {
        return this.cookie.get('access_token');
    }

    isLoggedIn(): boolean {
        return this.cookie.check('access_token');
    }

    logout() {
        this.cookie.deleteAll('/');
        this.router.navigate(['/login']);
    }

    register(payload: {
            email: string;
            username: string;
            firstname: string;
            lastname: string;
            role: string;
            phone_no: string;
            password: string;
        }) {
            return this.http.post(`${this.API}/auth/`, payload);
        }
}
