import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from "../services/category.service";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  params: any;
  categoryData: any;
  allCategoryData: any;
  config: any = {
    direction: 'horizontal',
    slidesPerView: '8',
    observer: true,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'slide',  //"slide", "fade", "cube", "coverflow" or "flip"
    autoplay: false
  };

  constructor(public activatedRoute: ActivatedRoute, private categoryservice: CategoryService) { }


  ngOnInit() {
    // this.activatedRoute.url.subscribe(url => {
    // });
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.getCategoryData();
      this.getAllCategory();
    });
  }

  getAllCategory() {
    this.categoryservice.getAllCategory().subscribe(res => {
      this.allCategoryData = res;
    });
  }

  getCategoryData() {
    this.categoryservice.getCategoryData(this.params.id).subscribe(res => {
      this.categoryData = res;
    });
  }

}
