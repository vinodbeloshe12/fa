import { Component, OnInit, EventEmitter, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ListingService } from "../services/listing.service";
import { nglocationService } from "../services/location.service";

@Injectable()
export class EmitterService {
  /**
    * The _emitters attribute is a EventEmitter used to braodcast selected city name.
    *
    * @attribute _emitters
    * @type {any}
    * @private
    */
  private static _emitters: {
    /**
        * The channel property is used to store selected city name.
        *
        * @property channel
        * @type {string}
        * @reference {EventEmitter}
        *
        */
    [channel: string]: EventEmitter<any>
  } = {};

  /**
     * Returns selected city name if property '_emitters[channel]' exixts
     *
     * @method get
     * @static
     * @params channel
     * @return {Object} _emitters
     */

  static get(channel: string): EventEmitter<any> {
    if (!this._emitters[channel])
      this._emitters[channel] = new EventEmitter();
    return this._emitters[channel];
  }
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [nglocationService]
})
export class HeaderComponent implements OnInit {
  userData: any;

  constructor(private router: Router, private listingservice: ListingService, private _ngLocation: nglocationService) {
    _ngLocation.getCitydata();
    EmitterService.get("selectedCity").subscribe(data => {
      this.selectedCity = data;
      localStorage.setItem('city', this.selectedCity);
    });
  }
  searchData: any;
  locationData: any;
  pos: any;
  searchTerms = "";

  public selectedCity: string;



  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.selectedCity = localStorage.getItem('city');
  }
  logout() {
    localStorage.setItem("userData", "");
    location.href = "/home";
  }

  changeRoute(id) {
    this.searchTerms = "";
    this.router.navigate(['detail', id]);
  }




  search(searchTerm) {
    this.listingservice.search(searchTerm).subscribe(res => {
      this.searchData = res;
    });
  }


}
