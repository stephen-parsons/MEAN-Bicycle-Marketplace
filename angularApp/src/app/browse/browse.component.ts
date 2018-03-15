import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _listingService: ListingService, private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.listings = [];
    this.userContact = null;
  	this.user = {first_name: "", last_name: "", email: "", password: ""};
    this.search = "";
  	this.getUserFromService();
  }

  getUserFromService(){
  	this._userService.getSession().subscribe(session=>{
  		if (session == null){
  			this._router.navigate(['/']);
  		}
  		else{
  			this._userService.getUser(session).subscribe(data=>{
	  			console.log("Got user:", data);
	  			this.user = data[0];	
          this.getAllListingsFromService();
    		})
    	}	
    })
  }

  onSubmitContact(user, listing){
    this._userService.getUser(user).subscribe(data=>{
      console.log("Got user's contact info:", data);
      this.userContact = data[0];
      this.userContact.listing = listing;  
    })
  }

  getAllListingsFromService(){
    this._listingService.getAllListings().subscribe(listings=>{
      console.log("Got listings: ", listings);
      this.listings = listings;
      this.allListings = listings;
    })
  }

  onSubmitDelete(id){
    this._listingService.removeListing(id).subscribe(data=>{
      console.log("Deleted:", data);
      this.getAllListingsFromService();
    })
  }

  onSubmitSearch(){
    if (this.search == ""){
      this.listings = this.allListings;
    }
    else{
      this.listings = [];
      for (let listing of this.allListings){
        if (this.search == listing.title){ 
          console.log(this.search, listing.title)  
          this.listings.push(listing);
        }
      }
    }
  }

  private listings: any;

  private allListings: any;

  private user: any;

  private search: String;

  private userContact: any;

}
