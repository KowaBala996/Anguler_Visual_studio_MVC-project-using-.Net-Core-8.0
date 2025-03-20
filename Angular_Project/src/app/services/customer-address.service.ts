import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {
  private apiUrl = 'https://localhost:7131/api/customeraddress';

  constructor(private http: HttpClient, private userService: UserService) { }

  getCustomerAddresses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
