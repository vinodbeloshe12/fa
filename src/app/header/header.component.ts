import { Component, OnInit } from '@angular/core';
import { ListingService } from "../services/listing.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private listingservice: ListingService) { }
  searchData: any;
  locationData: any;
  pos: any;
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.pos = pos;

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('Location found.');
        // infoWindow.open(map);
        // map.setCenter(pos);
      }, function () {

        this.getLocationAPI(this.pos);
        // handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      // handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  // getLocationAPI(pos) {
  //   console.log(":in location", this.pos, pos);
  //   this.listingservice.getLocation(pos.lat, pos.lang).subscribe(res => {
  //     this.locationData = res;
  //     console.log("pos", this.locationData);
  //   });
  // }

  search(searchTerm) {
    this.listingservice.search(searchTerm).subscribe(res => {
      this.searchData = res;
    });
  }


}
