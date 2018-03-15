import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _listingService: ListingService, private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  	this._userService.logoutUser().subscribe(data=>{
  		console.log(data);
  		if (data == null){
  			console.log("User logged out");
  		}
  	});
    this.getBikeOfTheDay();
    this.listing = {};
  	this.logUser = {email: "", password: ""};
    this.regUser = {first_name: "", last_name: "", email: "", password: ""};
  }

  private logUser: any;

  private regUser: any;

  private listing: any;

  getBikeOfTheDay(){
    this._listingService.getAllListings().subscribe(listings=>{
      console.log("Got listings: ", listings);
      let random = Math.floor(Math.random() * listings.length);
      this.listing = listings[random];
      console.log(this.listing);
    }) 
  }

  onSubmitRegistration(){
  	this._userService.createUser(this.regUser).subscribe(data=> {
  		console.log("Got data back:", data);
  		// this.user = {first_name: "", last_name: "", email: "", password: ""};
  		this._router.navigate(['/browse']);
  	});
  }

  onSubmitLogin(){
  	this._userService.loginUser(this.logUser).subscribe(data=> {
  		console.log("Got data back:", data);
  		this.logUser = {email: "", password: ""};
  		this._router.navigate(['/browse']);
  	});
  }

}
