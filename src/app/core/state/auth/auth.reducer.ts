import {createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  token: null,
  error: null,
  isAuthenticated: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) =>
    ({ ...state, token, error: null })),

  on(AuthActions.loginFailure, (state, { error }) =>
    ({ ...state, error })),

  on(AuthActions.setAuthenticationStatus, (state, {isAuthenticated}) =>
    ({ ...state, isAuthenticated }))
);
