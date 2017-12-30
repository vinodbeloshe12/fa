import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }



  login(data) {
    console.log("login data", data);
    this.router.navigate(['editprofile']);
  }
}
