import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListingService {

  constructor(private _http: HttpClient) {}

  createListing(listing){
  	return this._http.post("listing/create", listing);
  }

  getListingsForUser(user){
  	return this._http.get("listing/"+user);
  }

  getAllListings(){
  	return this._http.get("listing");
  }

  editListing(listing){
  	return this._http.put("listing/edit", listing);
  }

  removeListing(id){
    return this._http.delete("listing/remove/"+id);
  }

  // getRandomListing(){
  //   return this._http.get("listing/random")
  // }

}
