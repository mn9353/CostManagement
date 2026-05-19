import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './features/app-header/app-header.component';
import { TopNavComponent } from './features/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ThemeToggleComponent } from './features/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TopNavComponent,
    HomeComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
