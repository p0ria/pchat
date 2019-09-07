import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as appSelectors from "../state/app.selectors";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string | null;

  constructor(private router: Router,
              private store: Store<any>){
    this.store.select(appSelectors.getToken)
      .subscribe(token => this.token = token);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.headers.get('No-Auth') === "True"){
      // Request requires no token
      return next.handle(req.clone());
    }
    if(this.token){
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + this.token)
        })
      );
    }else{
      this.router.navigate(['/login']);
    }
  }
}
