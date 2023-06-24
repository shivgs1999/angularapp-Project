import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeadersInterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const API_KEY = '123'
        const request = req.clone({
            setHeaders: {
                API_KEY
            }
        })
        console.log('request from interceptor', request);
        return next.handle(request)
    }
}