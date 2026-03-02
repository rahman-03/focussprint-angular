import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take, of} from 'rxjs';

let isRefreshing = false;
let refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  const token = auth.getToken();
  let authReq = req;

  // 🔹 Attach token if available
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
  }

  // 🔥 PROACTIVE REFRESH CHECK
  if ( token && auth.isTokenExpiringSoon() && !isRefreshing && !req.url.includes('/refresh')) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return auth.refreshToken().pipe(
      switchMap((res: any) => {
        const newToken = res.access_token;
        auth.saveToken(newToken);

        isRefreshing = false;
        refreshTokenSubject.next(newToken);

        return next(
          req.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`
            },
            withCredentials: true
          })
        );
      }),
      catchError((err) => {
        isRefreshing = false;
        auth.logout();
        return throwError(() => err);
      })
    );
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      // 🔥 REACTIVE FALLBACK
      if (error.status === 401 && !req.url.includes('/refresh')) {

        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          return auth.refreshToken().pipe(
            switchMap((res: any) => {
              const newToken = res.access_token;
              auth.saveToken(newToken);

              isRefreshing = false;
              refreshTokenSubject.next(newToken);

              return next(
                req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${newToken}`
                  },
                  withCredentials: true
                })
              );
            }),
            catchError((refreshError) => {
              isRefreshing = false;
              auth.logout();
              return throwError(() => refreshError);
            })
          );

        } else {
          // 🔄 Wait for ongoing refresh
          return refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap(token => {
              return next(
                req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${token}`
                  },
                  withCredentials: true
                })
              );
            })
          );
        }
      }

      return throwError(() => error);
    })
  );
};