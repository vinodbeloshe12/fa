import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {
    constructor(private http: Http) { }

    getAllListing(catid, subcatid) {
        return this.http.get('http://localhost/fa/index.php/json/getAllListing?catid=' + catid + '&subcatid=' + subcatid).map(res => res.json());
    }

    getLocation(lat, lang) {
        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lang + '&sensor=false').map(res => res.json());
    }

    search(searchTerm) {
        return this.http.get('http://localhost/fa/index.php/json/search?searchTerm=' + searchTerm).map(res => res.json());
    }

}