import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { UserService } from '../../../user.service';
import { User } from '../../../user';
import { Response } from '@angular/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  user:User  = this.authService.getUser();

  thanas =["Adabor", "Agargaon", "Badda", "Biman Bandar", "Bangshal", "Cantonment", "Chawkbazar Model", "Dakshinkhan", "Darus Salam", "Dhanmondi", "Demra", "Kotwali", "Gendaria", "Gulshan", "Hazaribagh", "Jatrabari", "Kadamtali", "Kafrul", "Kalabagan", "Kamringir Char", "Khilkhet", "Khilgaon", "Lalbagh", "Mirpur", "Mohammadpur", "Motijheel", "New Market", "Pallabi", "Paltan", "Ramna", "Rampura", "Sabujbagh", "Shah Ali", "Shahbagh", "Sher-e-Bangla Nagor", "Shyampur", "Sutrapur", "Tejgaon", "Tejgaon Industrial Area", "Turag", "Uttar Khan", "Uttara"];

  zones=["Zone 1", "Zone 2", "Zone 3"];
  address= "";
  street= "";
  house = "";

  ngOnInit() {
    this.user.location.district = "Dhaka";
    this.user.location.city = "Dhaka";
  }

  isFormValid(){
    return this.user.isLocationValid();
  }

  onSubmit(){
    if(this.isFormValid()){
      this.userService.updateAddress(this.user.location);
    }
  }

}
