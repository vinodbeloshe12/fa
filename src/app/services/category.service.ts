import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConst } from '../app.constants';

@Injectable()
export class CategoryService {
    constructor(private http: Http) { }
    getAllCategory() {
        return this.http.get(AppConst.apiUrl + 'getallcategory').map(res => res.json());
    }
    getCategoryData(id) {
        return this.http.get(AppConst.apiUrl + 'getAllCategoryById?id=' + id).map(res => res.json());
    }
}