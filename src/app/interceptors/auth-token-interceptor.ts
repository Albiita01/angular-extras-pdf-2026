import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Antes de nada, preguntamos si viene en el request skip_token
  if (req.context.get(SKIP_TOKEN)) {// Devolvemos a respuesta original
    return next(req)
  }

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
