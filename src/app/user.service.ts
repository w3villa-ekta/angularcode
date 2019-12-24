import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  current_user = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email: '',
    password: ''
  }

  constructor() { }
  getCurrentUser() {
    return this.current_user;
  }

  setCurrentUser(current_user) {
    console.log("password :", current_user['password']);
    this.current_user = current_user
    console.log(this.current_user)
  }
}
