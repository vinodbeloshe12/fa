import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {
    constructor(private http: Http) { }

    getDetail(bid) {
        return this.http.get('http://www.findacross.com/admin/index.php/json/getDetails?name=' + bid).map(res => res.json());
    }


    getFormUrlEncoded(toConvert) {
        const formBody = [];
        for (const property in toConvert) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    }

    addReview(data) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post('http://www.findacross.com/admin/index.php/json/addReview', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
    }
}