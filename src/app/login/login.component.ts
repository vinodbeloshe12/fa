import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }



  login(data) {
    console.log("login data", data);
    this.loginService.login(data).subscribe((res) => {

      localStorage.setItem("userData", JSON.stringify(res));
      // this.router.navigate(['editprofile']);
      location.href = "/editprofile";

    });
  }
}
