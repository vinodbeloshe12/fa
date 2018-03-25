import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    constructor(private http: Http) { }
    getAllCategory() {
        return this.http.get('http://findacross.com/fa/index.php/json/getallcategory').map(res => res.json());
    }
    getCategoryData(id) {
        return this.http.get('http://findacross.com/fa/index.php/json/getAllCategoryById?id=' + id).map(res => res.json());
    }
}