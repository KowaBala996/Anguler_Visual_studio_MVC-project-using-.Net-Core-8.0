import { Component, OnInit } from '@angular/core';
import { CustomerAddressService } from '../services/customer-address.service';

@Component({
  selector: 'app-customer-address',
  standalone: false,
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css'
})
export class CustomerAddressComponent implements OnInit {
  customerAddresses: any[] = [];

  constructor(private customerAddressService: CustomerAddressService) { }

  ngOnInit(): void {
    this.loadCustomerAddresses();
  }

  loadCustomerAddresses(): void {
    this.customerAddressService.getCustomerAddresses().subscribe(
      (response) => {
        this.customerAddresses = response.result;
      },
      (error) => {
        console.error('Error fetching customer addresses:', error);
      }
    );
  }
}
