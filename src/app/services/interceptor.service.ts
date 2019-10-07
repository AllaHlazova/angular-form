import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// get our id
    const id = localStorage.getItem('id');
    if (id) {
      // added id to headers
      const reqId = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + id)
      });
      // transfer data further with id
      return next.handle(reqId);
      // console.log(reqId);
    }
    // else return req
    return next.handle(req);
  }
}


