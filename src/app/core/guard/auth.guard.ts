import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

export const AuthGuard: CanActivateFn = (): Observable<boolean> => {
  const router = inject(Router)
  const cookieService = inject(CookieService)

  if(!cookieService.check('token')){
    router.navigate(['/login'])
    return of(false)
  }else {
    return of(true);
  }

};
