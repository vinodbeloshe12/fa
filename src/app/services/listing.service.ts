import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {
    constructor(private http: Http) { }


    getFormUrlEncoded(toConvert) {
        const formBody = [];
        for (const property in toConvert) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    }

    getAllListing(catid, subcatid) {
        return this.http.get('http://www.findacross.com/admin/index.php/json/getAllListing?catid=' + catid + '&subcatid=' + subcatid).map(res => res.json());
    }

    search(searchTerm) {
        return this.http.get('http://www.findacross.com/admin/index.php/json/search?searchTerm=' + searchTerm).map(res => res.json());
    }


    addListing(data) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        // return this.http.post('http://localhost/finda/index.php/json/addListing', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
        return this.http.post('http://www.findacross.com/admin/index.php/json/addListing', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
    }
}