import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConst } from '../app.constants';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    login(data) {
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post(AppConst.apiUrl + 'login', data, { headers }).map(res => res.json());
    }

}