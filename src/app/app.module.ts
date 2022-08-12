import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitiesListComponent } from './components/universities-list/universities-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesListComponent,
    NavBarComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
