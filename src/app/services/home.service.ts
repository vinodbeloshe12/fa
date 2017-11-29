import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomePageService {
    constructor(private _http: Http) {

    }

    getHomeData() {
        return this._http.get('http://localhost/fa/index.php/json/gethomedata').map(res => res.json());
    }


}