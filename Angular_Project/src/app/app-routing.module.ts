import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'user', component: UserComponent },
  { path: 'customer-address', component: CustomerAddressComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
