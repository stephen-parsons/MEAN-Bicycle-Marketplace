import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private _listingService: ListingService, private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  	this.user = {first_name: "", last_name: "", email: "", password: ""};
  	this.listing = {title: "", text: "", price: "", location: "", imgUrl: ""};
  	this.listings = [];
  	this.getUserFromService();

  	// localStorage.setItem(key, val);
  }

  getUserFromService(){
  	this._userService.getSession().subscribe(session=>{
  		if (session == null){
  			this._router.navigate(['/']);
  		}
  		else{
  			this._userService.getUser(session).subscribe(data=>{
	  			console.log("Got user: ", data);
	  			this.user = data[0];
	  			this.getListingsForUser(this.user._id);	
  			})
  		}	
  	});
  }

  getListingsForUser(user){
  	this._listingService.getListingsForUser(user).subscribe(data=>{
  		console.log("Got listings for user: ", data);
  		this.listings = data;
  	})
  }

  onSubmit(){

  	this._listingService.createListing(this.listing).subscribe(data=>{
  		console.log("Listing recieved: ", data);
  		this.listing = {title: "", text: "", price: "", location: "", imgUrl: ""};
  		this.getListingsForUser(this.user._id);
  	})
  }

  onSubmitEdit(listing){
    console.log("You are editing:", listing);
    this._listingService.editListing(listing).subscribe(data=>{
      console.log("Listing recieved: ", data);
      this.listing = {title: "", text: "", price: "", location: "", imgUrl: ""};
      this.getListingsForUser(this.user._id);
    })
  }

  private user: any;

  private listing: any;

  // private editedListing: any;

  private listings: any;

}
