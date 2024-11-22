import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../core/state/auth/auth.actions';
import {selectAuthState} from '../core/state/auth/auth.selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  email: string = '';
  password: string = '';

   onLogin(email: string, password: string) {
    this.store.dispatch(AuthActions.login({email, password}))
  }

  ngOnInit(): void {
    // Disparar a verificação do token quando a aplicação iniciar
    this.store.select(selectAuthState).subscribe((isAuthenticated) => {
      if(isAuthenticated) {
        this.router.navigate(['/home'])
      }
    });
  }
}
