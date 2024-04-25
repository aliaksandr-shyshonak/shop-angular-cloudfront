import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set(
        'Ocp-Apim-Subscription-Key',
        String(localStorage.getItem('api-token')),
      ),
    });
    return next.handle(authReq);
  }
}
