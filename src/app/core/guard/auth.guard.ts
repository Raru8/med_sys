import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) {}

  canActivate(): Observable<boolean> {
    try {
      const token = this.cookieService.check('token')

      if(token){
        return of(true);
      }else{
        this.router.navigate(['/login']);
        return of(false);
      }
    }catch (e) {
      console.log(e)
      return of(false)
    }
  }
}
