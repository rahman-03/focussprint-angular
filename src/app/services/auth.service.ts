import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {jwtDecode} from 'jwt-decode';

import { environment } from '../../environments/environment';

export interface TokenPayload {
  id: number;
  sub: string;
  role: string;
  exp: number;
}

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

    
    getUserToken(): TokenPayload | null {
        const token = this.getToken();
        if (!token) return null;
        const decoded = jwtDecode<TokenPayload>(token);
        return decoded;
    }

    isAdmin(): boolean {
        return this.getUserToken()?.role === 'admin';
    }

    isTokenExpired():boolean{
        const exp_decoded = this.getUserToken()?.exp;
        if(!exp_decoded) return true;
        const now = Math.floor(Date.now()/1000);
        return exp_decoded < now
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
