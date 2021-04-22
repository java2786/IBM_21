import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  user:User;
  constructor(private userService:UserService) { 
    this.user = userService.user;
    // console.log(this.user)
  }

  ngOnInit(): void {
  }

  login(){
    // naviage to login page and send request to server
    
        // let's assume user has logged in and login is success
    
        this.userService.user.isValid = true;
        this.userService.user.role = 'admin';
        // this.userService.user.role = 'seller';
      }
      logout(){
        this.userService.user.isValid = false;
        delete this.userService.user.role;


      }
    

}
