import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {
    constructor(private http: Http) { }

    getAllListing(catid, subcatid) {
        return this.http.get('http://findacross.com/fa/index.php/json/getAllListing?catid=' + catid + '&subcatid=' + subcatid).map(res => res.json());
    }

    search(searchTerm) {
        return this.http.get('http://findacross.com/fa/index.php/json/search?searchTerm=' + searchTerm).map(res => res.json());
    }


    addListing(data) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        // headers.append('enctype', 'multipart/form-data');
        return this.http.post('http://findacross.com/fa/index.php/json/addListing', data, { headers }).map(res => res.json());
    }
}