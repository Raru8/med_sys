import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {AngularToastifyModule, ToastService} from 'angular-toastify';

import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {StateModule} from './core/state/state.module';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StateModule,
    AngularToastifyModule
  ],
  providers: [
    provideClientHydration(),
    ToastService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
