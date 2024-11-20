import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../core/state/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(
    private store: Store,
  ) {}

  email: string = '';
  password: string = '';

   onLogin(email: string, password: string) {
    this.store.dispatch(AuthActions.login({email, password}))
  }
}
