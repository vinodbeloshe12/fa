import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    login(data) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('http://www.findacross.com/admin/index.php/json/login', data, { headers }).map(res => res.json());
    }

}