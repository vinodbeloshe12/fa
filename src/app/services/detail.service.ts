import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {
    constructor(private http: Http) { }

    getDetail(bid) {
        return this.http.get('http://localhost/fa/index.php/json/getDetails?name=' + bid).map(res => res.json());
    }

}