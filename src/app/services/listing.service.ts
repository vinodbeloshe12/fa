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

}