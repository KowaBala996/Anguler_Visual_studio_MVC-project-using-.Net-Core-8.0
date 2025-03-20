import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { UserService } from './services/user.service';
import { CustomerAddressService } from './services/customer-address.service';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerAddressComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Add FormsModule
  ],
  providers: [UserService, CustomerAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
