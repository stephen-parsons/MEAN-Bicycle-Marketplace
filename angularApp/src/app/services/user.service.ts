import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {}

  createUser(user){
  	return this._http.post("/user/create", user);
  }

  loginUser(user){
  	return this._http.post("/user/login", user);
  }

  getSession(){
  	return this._http.get("user/session");
  }

  getUser(user){
    return this._http.get("user/"+user);
  }

  logoutUser(){
    return this._http.get("user/logout");
  }

}
