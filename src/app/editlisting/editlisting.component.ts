import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css']
})
export class EditlistingComponent implements OnInit {
  userData: any;

  constructor() { }
  listingData: any = {};
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.listingData = this.userData.details;
  }

}
