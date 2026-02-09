import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = ()=> {
    const auth = inject(AuthService);
    const router = inject(Router);
    if(!auth.isLoggedIn()){
        router.navigate(['/login']);
        return false
    }

    if (auth.isTokenExpired()) {
        alert('Session Expired, Please Login again');
        auth.logout();
        return false
    }
    return true;
};