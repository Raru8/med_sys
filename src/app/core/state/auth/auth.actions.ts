import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{email: string; password: string}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{token: string}>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: any}>()
);

export const checkAuthentication = createAction(
  '[Auth] Check Authentication',
);

export const setAuthenticationStatus = createAction(
  '[Auth] Set Authentication Status',
  props<{isAuthenticated: boolean}>()
)
