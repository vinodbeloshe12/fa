import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConst } from '../app.constants';

@Injectable()
export class LoginService {
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


    login(data) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // return this.http.post('http://localhost/finda/index.php/json/loginuser', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
        return this.http.post(AppConst.apiUrl + 'loginuser', this.getFormUrlEncoded(data), { headers }).map(res => res.json());
    }

}