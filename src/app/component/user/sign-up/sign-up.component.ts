import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email: '',
    password: ''
  }
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    
  }

  doSignUp(user) {
    console.log(user.password);
    this.userService.setCurrentUser(user);
    this.router.navigate(['/user-show']);
   
  }

}
