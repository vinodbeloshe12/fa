import { Component, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  city: string;
  listingData: any = {};
  constructor() { }

  ngOnInit() {
    this.listingData.city = localStorage.getItem('city');
  }

  saveData(data) {
    console.log("dattta", data);
  }

}
