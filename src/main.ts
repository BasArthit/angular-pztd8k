import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { addressData, AddressData } from './address-json';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  styleUrls: ['./main.css'],
  templateUrl: './main.html',
})
export class App {
  addressData: AddressData[];
  name = 'Angular';
  arr: string[] = [];
  matchedAddresses: AddressData[];
  outList: AddressData[];
  constructor() {
    this.addressData = addressData;
    this.matchedAddresses = this.matchedAddresses;
  }

  getform(zipcode) {
    this.matchedAddresses = addressData.filter((a) => a.zipcode == zipcode);
    // if (this.matchedAddresses.length > 0) {
    //   return this.matchedAddresses;
    // } else {
    //   console.log(`Address not found for zipcode prefix ${zipcode}`);
    //   return null;
    // }
  }

  getList(list) {
    this.arr = list[0];
  }
}

bootstrapApplication(App);
