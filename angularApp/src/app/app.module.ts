import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import { ListingService } from './services/listing.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BrowseComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [UserService, ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
