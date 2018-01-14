import { Component, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ListingService } from '../services/listing.service';
import { error } from 'util';
@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  city: string;
  listingData: any = {};
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listingData.city = localStorage.getItem('city');
  }

  saveData(data) {
    console.log("dattta", data);
    this.listingService.addListing(data).subscribe((res) => {
      if (res.value) {
        console.log("res", res);
        this.listingData = {};
      }
    }, error => console.log("error"));
  }

}
