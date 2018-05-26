import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConst } from '../app.constants';

@Injectable()
export class DetailService {
    constructor(private http: Http) { }

    getDetail(bid) {
        // return this.http.get('http://localhost/finda/index.php/json/getDetails?name=' + bid).map(res => res.json());
        return this.http.get(AppConst.apiUrl + 'getDetails?name=' + bid).map(res => res.json());
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
        return this.http.post(AppConst.apiUrl + 'addReview', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
    }

    enquiry(data) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // return this.http.post('http://localhost/finda/index.php/json/enquiry', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
        return this.http.post(AppConst.apiUrl + 'enquiry', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
    }
}