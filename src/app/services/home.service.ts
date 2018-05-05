import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConst } from '../app.constants';

@Injectable()
export class HomePageService {
    constructor(private _http: Http) {

    }

    getHomeData() {
        return this._http.get(AppConst.apiUrl + 'gethomedata').map(res => res.json());
    }

    getContentData(id) {
        // return this._http.get('http://localhost/finda/index.php/json/getContent?id=' + id).map(res => res.json());
        return this._http.get(AppConst.apiUrl + 'getContent?id=' + id).map(res => res.json());
    }


}