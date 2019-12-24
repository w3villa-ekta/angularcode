import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  current_user = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email: '',
    password: ''
  }

  constructor(private user: UserService) { }

  ngOnInit() {
    this.current_user = this.user.getCurrentUser();
    console.log(this.current_user)
  }

}
