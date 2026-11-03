import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem("TOKEN");
  // Si tenemos token, debemos clonar la petición
  if (token) {
    // Debemos clonar la petición
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: "bearer " + token
      }
    })
    // Devolvemos la petición del token
    return next(tokenRequest);
  }
  return next(req);
};
