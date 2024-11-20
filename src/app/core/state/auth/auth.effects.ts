import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../service/auth.service';
import * as AuthActions from './auth.actions'
import {catchError, map, switchMap} from 'rxjs/operators';
import {of, tap} from 'rxjs';
import {ToastService} from 'angular-toastify';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private _toastService: ToastService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.authService.login({ email: action.email, password: action.password }).pipe(
          map((response) => {
            this.cookieService.set('token', response.token);
            return AuthActions.loginSuccess({ token: response.token });
          }),
          catchError((error) =>
            of(AuthActions.loginFailure({error}))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
            this.router.navigate(['/home'])
            this._toastService.success('Login bem-sucedido!')
          }
        )
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => this._toastService.error('Erro no login, tente novamente!'))
      ),
    { dispatch: false }
  );
}
