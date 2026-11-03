import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);
  const _router: Router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      toastService.error(error.message);
      _router.navigate(['/error']);
      console.log("Tipo de error: " + error.status);
      console.log("Mensaje de error: " + error.statusText);
      // estamos capturando un error, debemos propagar dicho error a la petición
      return throwError(() => error);
    })
  );


  // const toastService: ToastService = inject(ToastService);
  // Esto para usar el toast sin página de error personalizada
  // return next(req).pipe(
  //   catchError((error: HttpErrorResponse) => {
  //     toastService.error(error.message);
  //     console.log("Tipo de error: " + error.status);
  //     console.log("Mensaje de error: " + error.statusText);
  //     // estamos capturando un error, debemos propagar dicho error a la petición
  //     return throwError(() => error);
  //   })
  // );
};
