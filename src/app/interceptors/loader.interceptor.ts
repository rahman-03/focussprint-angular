import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
    const loader = inject(LoaderService);

    Promise.resolve().then(() => loader.show());


    return next(req).pipe(
      finalize(() => loader.hide())
    );
};
