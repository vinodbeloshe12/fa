import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { AppConst } from "../app.constants";
import { MetaService } from "@ngx-meta/core";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  loaderImg = AppConst.loaderImage;
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

  constructor(public activatedRoute: ActivatedRoute, readonly meta: MetaService, private categoryservice: CategoryService) { }


  ngOnInit() {
    // this.activatedRoute.url.subscribe(url => {
    // });
    this.activatedRoute.params.subscribe(params => {
      this.params = params;
      console.log("param", this.params)
      // window.history.pushState('', params.name, '/' + params.name);
      this.getCategoryData();
      this.getAllCategory();
    });

    this.meta.setTitle(`${this.params.name}`);
    this.meta.setTag("keywords", `${this.params.name}` + ' in Mumbai,' + `${this.params.name}` + ' in Bhandup, Mumbai');
    this.meta.setTag("description", `${this.params.name}` + ' in Mumbai,' + `${this.params.name}` + ' in Bhandup, Mumbai');
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
