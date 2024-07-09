import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) {
  }
  httpErrorCode: number | undefined;
  access_token: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/auth/otp') || req.url.includes('/login') 
      || req.url.includes('/refreshtoken') || req.url.includes('/maps.googleapis.com') 
    || req.url.includes('https://test-web.cloudjiffy.net/booking-service/api/v1/customer/upcoming')) {
      return next.handle(req);
    }
    let authToken: any;

    let token = this.access_token;

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.access_token
        },
        withCredentials: false
      });
    } else {
      this.access_token = sessionStorage.getItem('access_token');
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
        },
        withCredentials: false
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          this.httpErrorCode = error.status;
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nStatus:${this.httpErrorCode}`;
        }

        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('/Login') &&
          error.status === 401
        ) {
          // Handle the 401 error
          // Example: Redirect to login page
          this.router.navigate(['/login']);
          return throwError(() => new Error('Unauthorized')); // Return an observable with an error
        }

        if (this.httpErrorCode == HttpStatusCode.Conflict) {
          return throwError(() => error.error);
        } else {
          return throwError(() => new Error(errorMessage));
        }
      })
    );
  }
}
